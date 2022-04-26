import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import Header from '../components/Header'
import TitleSistema from '../components/TitleSistema'
import { Data } from '../components/utils/formatDate'
// import Image from 'next/image'
// import Header from '../components/Header'
// import Gestor from '../../public/assets/gestor.png'
// import Checkout from '../../public/assets/checkout.png'
// import Fluxo from '../../public/assets/fluxo.png'
// import Contabil from '../../public/assets/contabil.png'
// import Os from '../../public/assets/os.png'
// import Vendas from '../../public/assets/vendas.png'

const fetcher = url => fetch(url).then(res => res.json())

const Index = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, error } = useSWR(`/api/releases/`, fetcher)

  if (error) return 'An error has occurred.'
  if (!data)
    return (
      <div className='flex justify-center items-center mt-52 overflow-hidden'>
        <div
          className={`animate-spin rounded-full h-32 w-32 border-b-8 `}
        ></div>
      </div>
    )
  const result = data.data[0]
  const release = data.data[1]

  return (
    <>
      <Header title={'Release Notes'} />
      <div className='grid grid-rows-1 grid-flow-col gap-4 overflow-x-hidden'>
        <div className='col-span-2'>
            <h1 className='select-none p-12 font-sans font-semibold text-4xl text-center'>
              C&S Sistemas - Release Notes
            </h1>
          <div className='relative p-12 '>
            {result.map((item, index) => (
              <div id={item.version} className={index === 0 ? '-mt-11' : null}>
                <p key={index} className='font-sans font-semibold text-2xl '>
                  {Data(item.date)} - Release {item.version} - <TitleSistema>{item.sistema}</TitleSistema>
                </p>
                {
                  item.description.map((i, index) => (
                    <>
                      <div key={index} className='flex flex-row '>
                        <div className='bg-[#41F353] w-16 h-9 rounded-full'>
                          <p className='select-none font-bold text-xs text-center mt-2'>
                            {i.requisito}
                          </p>
                        </div>
                        <p className='ml-3 mt-2 font-roboto'>{i.title}</p>
                      </div>
                      <div className='w-[1000px]  mt-4 ml-20 font-roboto mb-3'>
                        <p className='text-justify'>{i.item}</p>
                      </div>
                    </>
                  ))
                }

              </div>
            ))}
          </div>
        </div>
        <div className='row-span-1 w-[200px] '>
          <div className='flex flex-col h-[460px] mt-28 mb-14 border-l border-black fixed overflow-auto'>
            {release.map((i) => (
              <Link href={'#'+i.release}>
                <a className='ml-5'>Release {i.release}</a>
              </Link>
            ))}
            {/* <Link href='/'>
              <a className='ml-5 mt-10 hover:text-green-900'>Voltar</a>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

