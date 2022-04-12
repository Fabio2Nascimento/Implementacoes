import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Image from 'next/image'
import Gestor from '../public/assets/gestor.png'
import Checkout from '../public/assets/checkout.png'
import Fluxo from '../public/assets/fluxo.png'
import Contabil from '../public/assets/contabil.png'
import Os from '../public/assets/os.png'
import Vendas from '../public/assets/vendas.png'


const Index = () => {
  return (
    <>
      <Header title="Release Notes" />
      <div className="bg-white grid justify-items-center p-48 ">
        <p className="font-sans font-bold text-5xl">Release Notes</p>
        <div className="flex flex-row p-10">
          <div className="">
            <Link href={'/gestor'}>
              <Image alt="Gestor" className='hover:cursor-pointer' src={Gestor} width={100} height={100} />
            </Link>
          </div>
          <div className="">
            <Link href={'/checkout'}>
              <Image alt="Checkout" className='hover:cursor-pointer' src={Checkout} width={100} height={100} />
            </Link>
          </div>
          <div className="">
            <Link href={'/fluxo'}>
              <Image alt="Fluxo" className='hover:cursor-pointer' src={Fluxo} width={100} height={100} />
            </Link>
          </div>
          <div className="">
            <Link href={'/vendas'}>
              <Image alt="Vendas" className='hover:cursor-pointer' src={Vendas} width={100} height={100} />
            </Link>
          </div>
          <div className="">
            <Link href={'/contabil'}>
              <Image alt="Contabil" className='hover:cursor-pointer' src={Contabil} width={100} height={100} />
            </Link>
          </div>
          <div className="">
            <Link href={'/os'}>
              <Image alt="Os" className='hover:cursor-pointer' src={Os} width={100} height={100} />
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Index
