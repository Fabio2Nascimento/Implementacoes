import { DateUtils } from '@react-force/date-utils'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import * as yup from 'yup'
import DatePicker from '../../components/ui/DataPicker'

const Index = () => {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const DefaultTz = 'America/Sao_Paulo'
  const { formatToShortDateTime } = DateUtils

  const handleSubmit = async values => {
    const { sistema, date, version, description } = values
    const obj = {
      sistema,
      date: new Intl.DateTimeFormat('fr-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
        .format(date)
        .replace(/\//g, '-'),
      version,
      description: description.map(i => ({
        requisito: parseInt(i.requisito),
        title: i.title,
        item: i.item
      }))
    }
    // alert(JSON.stringify(obj, null, 2))

    const res = await fetch('api/release/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })

    const data = await res.json()
    // alert(data)
  }
  //   new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())
  return (
    <div className='flex justify-center  '>
      <Formik
        //className='max-w-md w-full space-y-8'
        initialValues={{
          sistema: '',
          date: '',
          version: '',
          description: [
            {
              requisito: '',
              title: '',
              item: ''
            }
          ]
        }}
        validationSchema={yup.object({
          sistema: yup.string().trim().required('Name is required'),
          date: yup.date().default(() => new Date()),
          version: yup.string().trim().required('Message is required'),
          description: yup.array().of(
            yup.object().shape({
              requisito: yup
                .number()
                .required('numero do requisito obrigatório'),
              title: yup.string().required('Titulo obrigatório'),
              item: yup.string().required('item obrigatório')
            })
          )
        })}
        onSubmit={handleSubmit}
        render={({ values, touched, setFieldValue }) => (
          <Form>
            <h5>Cadastro Release</h5>

            <div className='flex flex-col space-y-1'>
              <div className='flex flex-row space-x-2'>
                <label htmlFor='sistema'>Sistema:</label>
                <Field
                  className='border-solid border-gray-300 border py-2 px-1 w-full h-7 rounded text-gray-700'
                  // placeholder='Sistema'
                  name={`sistema`}
                />
                <ErrorMessage name={`sistema`} />
              </div>
              <div className='flex flex-row space-x-2'>
                {/* <label htmlFor='date'>Data:</label>
                <Field
                  className='border-solid border-gray-300 border py-2 px-1 w-full h-7 rounded text-gray-700'
                  // placeholder='Data'
                  name={`date`}
                />
                <ErrorMessage name={`date`} /> */}
                <label htmlFor='date'>Data:</label>
                <DatePicker
                  name='date'
                  value={values.date}
                  onChange={setFieldValue}
                />
              </div>
              <div className='flex flex-row space-x-2'>
                <label htmlFor='version'>Versão:</label>
                <Field
                  className='border-solid border-gray-300 border py-2 px-1 w-full h-7 rounded text-gray-700'
                  // placeholder='Versão'
                  name={`version`}
                />
                <ErrorMessage name={`version`} />
              </div>
              <FieldArray
                name='description'
                render={arrayHelpers => {
                  const description = values.description
                  // console.log('arrayHelpers')
                  // console.log(arrayHelpers)
                  // console.log('touched')
                  // console.log(touched)
                  return (
                    <div>
                      {description && description.length > 0
                        ? description.map((user, index) => (
                            <div className='space-y-1' key={index}>
                              <div className='flex flex-row space-x-2'>
                                <label htmlFor='requisito'>Requisito:</label>
                                <Field
                                  className='border-solid border-gray-300 border py-2 px-1 w-full h-7 rounded text-gray-700'
                                  // placeholder='Requisito'
                                  name={`description.${index}.requisito`}
                                />
                                <ErrorMessage
                                  name={`description.${index}.requisito`}
                                />
                              </div>
                              <div className='flex flex-row space-x-2'>
                                <label htmlFor='title'>Título:</label>
                                <Field
                                  className='border-solid border-gray-300 border py-2 px-1 w-full h-7 rounded text-gray-700'
                                  // placeholder='title'
                                  name={`description.${index}.title`}
                                />
                                <ErrorMessage
                                  name={`description.${index}.title`}
                                />
                              </div>
                              <div className='flex space-x-2'>
                                <label htmlFor='item'>Descrição:</label>
                                <Field
                                  className='border-solid border-gray-300 border w-full rounded text-gray-700'
                                  name={`description.${index}.item`}
                                  component='textarea'
                                  rows='4'
                                />
                                <ErrorMessage
                                  name={`description.${index}.item`}
                                />
                              </div>

                              <div className='grid justify-items-end '>
                                <button
                                  className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2'
                                  type='button'
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remover
                                </button>
                              </div>
                            </div>
                          ))
                        : null}
                      <div className='grid justify-items-end '>
                        <button
                          type='button'
                          className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2'
                          onClick={() =>
                            arrayHelpers.push({
                              requisito: '',
                              title: '',
                              item: ''
                            })
                          }
                        >
                          add
                        </button>
                      </div>
                      <div>
                        <button
                          className='ext-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2'
                          type='submit'
                        >
                          Cadastrar
                        </button>
                      </div>
                    </div>
                  )
                }}
              />

              <hr />
            </div>
          </Form>
        )}
      />
    </div>
  )
}

export default Index
