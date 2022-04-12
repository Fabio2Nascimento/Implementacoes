import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

const Release = () => {
  const router = useRouter()
  const { release } = router.query

  return
  //   <>
  //     <Header title={release} />
  ;<h1>{release}</h1>
  //   </>
}

export default Release
