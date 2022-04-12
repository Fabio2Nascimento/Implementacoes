import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

const Index = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Header title="Release Notes" />
      <p>{slug}</p>
    </>
  )
}

export default Index
