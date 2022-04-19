import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Image from 'next/image'
import Gestor from '../public/assets/gestor.png'
import Checkout from '../public/assets/checkout.png'
import Fluxo from '../public/assets/fluxo.png'
import Contabil from '../public/assets/contabil.png'
import Os from '../public/assets/os.png'
import Vendas from '../public/assets/vendas.png'





const Index = () => {
  const router = useRouter()
  const lazyRoot = React.useRef(null)


  const [ipAddress, setIpAddress] = useState(null);
  useEffect(() => {
    const getIp = async () => {
      fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => setIpAddress(data?.ip))
    }
    getIp()
  }, []);

  // console.log(router.events)

  return (
    <>
      <Header title='Release Notes' />
      <div className='md:container md:mx-auto bg-white grid justify-items-center p-48 overflow-hidden'>
        <p className='font-sans font-bold md:text-5xl '>Release Notes</p>
        <div ref={lazyRoot} className='flex md:flex-row sm:flex-col p-10'>
          <div className=''>
            <Image
              onClick={() => { router.push('/gestor') }}
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
              onClick={() => { router.push('/checkout') }}
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
              onClick={() => { router.push('/fluxo') }}
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
              onClick={() => { router.push('/vendas') }}
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
              onClick={() => { router.push('/contabil') }}
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
              onClick={() => { router.push('/os') }}
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
