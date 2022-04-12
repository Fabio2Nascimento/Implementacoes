import React from 'react'
import Header from '../components/Header'

const Index = () => {
  return (
    <>
      <Header title="Release Notes" />
      <div className="bg-white grid justify-items-center p-48 ">
        <p className="font-sans font-bold text-5xl">Release Notes</p>
        <div className="flex flex-row p-10">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
        </div>
      </div>
    </>
  )
}

export default Index
