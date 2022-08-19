import React from 'react'
import DatePicker from 'react-datepicker'

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <DatePicker
      className='border-solid border-gray-300 border py-2 px-1 w-full h-7 rounded text-gray-700'
      //   dateFormat={'yyyy-MM-dd'}
      selected={(value && new Date(value)) || null}
      onChange={val => {
        onChange(name, val)
      }}
    />
  )
}

export default DatePickerField
