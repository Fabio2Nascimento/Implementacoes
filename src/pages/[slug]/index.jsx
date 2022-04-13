import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import Header from '../../components/Header'
import { Data } from '../../components/utils/formatDate'

const fetcher = url => fetch(url).then(res => res.json())

const Index = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, error } = useSWR('/api/releases', fetcher)

  if (error) return 'An error has occurred.'
  if (!data)
    return (
      <div className='flex justify-center items-center mt-52'>
        <div
          className={`animate-spin rounded-full h-32 w-32 border-b-8 `}
        ></div>
      </div>
    )
  const result = data.data

  return (
    <>
      <Header title='Gestor | Release Notes' />
      <div className='overflow-hidden grid grid-rows-1 grid-flow-col gap-4 relative '>
        <div className='col-span-2'>
          <h1 className='p-12 font-sans font-semibold text-2xl'>
            C&S Sistemas - Release Notes
          </h1>

          <div className='p-12 overflow-y-auto'>
            {result.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className={index === 0 ? '-mt-11' : null}>
                <p className='font-sans font-semibold text-2xl '>
                  {Data(item.date)} - Release {item.version}
                </p>
                <div className='flex flex-row '>
                  <div className='bg-[#41F353] w-28 h-9 rounded-full'>
                    <p className='font-sans text-xs text-center mt-2'>
                      {item.sistema}
                    </p>
                  </div>
                  <p className='ml-3 mt-2 font-roboto'>{item.title}</p>
                </div>
                <div className='max-w-3xl mt-4 ml-20 font-roboto mb-3'>
                  {item.description.map(i => (
                    <p>{i.item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='row-span-3 mt-28 mb-14 border-l border-black  '>
          <div className='flex flex-col  place-content-center '>
            <Link href='/'>
              <a className='ml-5'>Release 90.6.6</a>
            </Link>
            <Link href='/'>
              <a className='ml-5'>Release 90.5.3</a>
            </Link>
            <Link href='/'>
              <a className='ml-5'>Release 90.4.9</a>
            </Link>
            <Link href='/'>
              <a className='ml-5'>Release 90.3.8</a>
            </Link>
            <Link href='/'>
              <a className='ml-5'>Release 90.2.1</a>
            </Link>
            <Link href='/'>
              <a className='ml-5'>Release 90.1.0</a>
            </Link>
            <Link href='/'>
              <a className='ml-5'>Release 90.0.0</a>
            </Link>
            <Link href='/'>
              <a className='ml-5 mt-10 hover:text-green-900'>Voltar</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
