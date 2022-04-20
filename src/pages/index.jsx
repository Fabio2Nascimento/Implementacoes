import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  browserName,
  browserVersion,
  osName,
  osVersion
} from 'react-device-detect'
import Image from 'next/image'
import Header from '../components/Header'
import Gestor from '../public/assets/gestor.png'
import Checkout from '../public/assets/checkout.png'
import Fluxo from '../public/assets/fluxo.png'
import Contabil from '../public/assets/contabil.png'
import Os from '../public/assets/os.png'
import Vendas from '../public/assets/vendas.png'

function Index() {
  const router = useRouter()
  const lazyRoot = React.useRef(null)

  const [device, setDevice] = useState([])
  useEffect(() => {
    const getDevice = async () => {
      // fetch('https://api.ipify.org?format=json')
      fetch('https://geolocation-db.com/json/')
        .then(res => {
          if (res.status === 200) {
            return res.json()
          }
        })
        .then(data => setDevice([data]))
    }
    getDevice()
  }, [])

  const postInformations = async () => {
    const getInfor = {
      date: new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        dateStyle: 'short',
        timeStyle: 'long'
      }).format(new Date()),
      country_code: await device[0]?.country_code,
      city: await device[0]?.city,
      country_name: await device[0]?.country_name,
      state: await device[0]?.state,
      device: {
        ip: await device[0]?.IPv4,
        os: osName,
        browser: browserName,
        browserVersion: browserVersion
      }
    }
    fetch(`/api/analytic`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getInfor)
    })
  }
  useEffect(() => {
    if (device.length > 0) {
      postInformations()
    }
  }, [device])

  return (
    <>
      <Header title='Release Notes' />
      <div className='md:container md:mx-auto bg-white grid justify-items-center p-48 overflow-hidden'>
        <p className='font-sans font-bold md:text-5xl '>Release Notes</p>
        <div ref={lazyRoot} className='flex md:flex-row sm:flex-col p-10'>
          <div className=''>
            <Image
              onClick={() => {
                router.push('/gestor')
              }}
              lazyRoot={lazyRoot}
              alt='Gestor'
              className='hover:cursor-pointer'
              src={Gestor}
              width={100}
              height={100}
            />
          </div>
          <div className=''>
            <Image
              onClick={() => {
                router.push('/checkout')
              }}
              lazyRoot={lazyRoot}
              alt='Checkout'
              className='hover:cursor-pointer'
              src={Checkout}
              width={100}
              height={100}
            />
          </div>
          <div className=''>
            <Image
              onClick={() => {
                router.push('/fluxo')
              }}
              lazyRoot={lazyRoot}
              alt='Fluxo'
              className='hover:cursor-pointer'
              src={Fluxo}
              width={100}
              height={100}
            />
          </div>
          <div className=''>
            <Image
              onClick={() => {
                router.push('/vendas')
              }}
              lazyRoot={lazyRoot}
              alt='Vendas'
              className='hover:cursor-pointer'
              src={Vendas}
              width={100}
              height={100}
            />
          </div>
          <div className=''>
            <Image
              onClick={() => {
                router.push('/contabil')
              }}
              lazyRoot={lazyRoot}
              alt='Contabil'
              className='hover:cursor-pointer'
              src={Contabil}
              width={100}
              height={100}
            />
          </div>
          <div className=''>
            <Image
              onClick={() => {
                router.push('/os')
              }}
              lazyRoot={lazyRoot}
              alt='Os'
              className='hover:cursor-pointer'
              src={Os}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
