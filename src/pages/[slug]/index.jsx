import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/Header'

const Index = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Header title="Gestor | Release Notes" />
      <div className='overflow-hidden grid grid-rows-1 grid-flow-col gap-4 relative '>
        <div className='col-span-2'>
          <h1 className='p-12 font-sans font-semibold text-2xl'>C&S Sistemas - Release Notes</h1>

          <div className='p-12 overflow-y-auto'>
            <div className='-mt-11'>
              <p className='font-sans font-semibold text-2xl '>Abril 12, 2022 - Release 90.5.6</p>
              <div className='flex flex-row '>
                <div className='bg-[#41F353] w-28 h-9 rounded-full'>
                  <p className='font-sans text-xs text-center'>Customização <br /> Simples</p>
                </div>
                <p className='ml-3 mt-2 font-roboto'>SEPARAR AS CONTAS CONTÁBEIS DO ISSQN A RECOLHER DAS ENTRADAS E DAS SAÍDAS</p>
              </div>
              <div className='max-w-3xl mt-4 ml-20 font-roboto'>
                <p>1 - Adicionar o campo na guia Saídas da tela Contas contábeis - Geral em Escrituração | integração contábil e clique duas vezes em cima do registro da guia Contas contábeis - Geral</p>
                <p>2 - Toda nota de saída de serviços deverá ser vinculadas as contas contábeis criadas/configuradas no item 1. A mesma regra deve ser seguida na exportação para o contábil.</p>
              </div>
            </div>

            <div className=''>
              <p className='font-sans font-semibold text-2xl '>Março 17, 2022 - Release 90.4.2</p>
              <div className='flex flex-row '>
                <div className='bg-[#41F353] w-28 h-9 rounded-full'>
                  <p className='font-sans text-xs text-center'>Customização <br /> Simples</p>
                </div>
                <p className='ml-3 mt-2 font-roboto'>SEPARAR AS CONTAS CONTÁBEIS DO ISSQN A RECOLHER DAS ENTRADAS E DAS SAÍDAS</p>
              </div>
              <div className='max-w-3xl mt-4 ml-20 font-roboto'>
                <p>1 - Adicionar o campo na guia Saídas da tela Contas contábeis - Geral em Escrituração | integração contábil e clique duas vezes em cima do registro da guia Contas contábeis - Geral</p>
                <p>2 - Toda nota de saída de serviços deverá ser vinculadas as contas contábeis criadas/configuradas no item 1. A mesma regra deve ser seguida na exportação para o contábil.</p>
              </div>
            </div>

            <div className=''>
              <p className='font-sans font-semibold text-2xl '>Janeiro 07, 2022 - Release 90.0.3</p>
              <div className='flex flex-row '>
                <div className='bg-[#41F353] w-28 h-9 rounded-full'>
                  <p className='font-sans text-xs text-center'>Customização <br /> Simples</p>
                </div>
                <p className='ml-3 mt-2 font-roboto'>SEPARAR AS CONTAS CONTÁBEIS DO ISSQN A RECOLHER DAS ENTRADAS E DAS SAÍDAS</p>
              </div>
              <div className='max-w-3xl mt-4 ml-20 font-roboto'>
                <p>1 - Adicionar o campo na guia Saídas da tela Contas contábeis - Geral em Escrituração | integração contábil e clique duas vezes em cima do registro da guia Contas contábeis - Geral</p>
                <p>2 - Toda nota de saída de serviços deverá ser vinculadas as contas contábeis criadas/configuradas no item 1. A mesma regra deve ser seguida na exportação para o contábil.</p>
              </div>
            </div>
          </div>

        </div>
        <div className='row-span-3 mt-28 mb-14 border-l border-black  '>
          <div className='flex flex-col  place-content-center '>
            <Link href='/'><a className='ml-5'>Release 90.6.6</a></Link>
            <Link href='/'><a className='ml-5'>Release 90.5.3</a></Link>
            <Link href='/'><a className='ml-5'>Release 90.4.9</a></Link>
            <Link href='/'><a className='ml-5'>Release 90.3.8</a></Link>
            <Link href='/'><a className='ml-5'>Release 90.2.1</a></Link>
            <Link href='/'><a className='ml-5'>Release 90.1.0</a></Link>
            <Link href='/'><a className='ml-5'>Release 90.0.0</a></Link>
            <Link href='/'><a className='ml-5 mt-10 hover:text-green-900'>Voltar</a></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
