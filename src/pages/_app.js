import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import {
  browserName,
  browserVersion,
  osName,
} from 'react-device-detect'


function MyApp({ Component, pageProps }) {
  const [device, setDevice] = useState([])
  useEffect(() => {
    const getDevice = async () => {
      // fetch('https://api.ipify.org?format=json')
      fetch('https://geolocation-db.com/json/')
        .then(res => {
          if (res.status === 200) {
            return res.json()
          }
        })
        .then(data => setDevice([data]))
    }
    getDevice()
  }, [])

  const postInformations = async () => {
    const getInfor = {
      date: new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        dateStyle: 'short',
        timeStyle: 'long'
      }).format(new Date()),
      country_code: await device[0]?.country_code,
      city: await device[0]?.city,
      country_name: await device[0]?.country_name,
      state: await device[0]?.state,
      device: {
        ip: await device[0]?.IPv4,
        os: osName,
        browser: browserName,
        browserVersion: browserVersion
      }
    }
    fetch(`/api/analytic`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getInfor)
    })
  }
  useEffect(() => {
    if (device.length > 0) {
      postInformations()
    }
  }, [device])

  return <Component {...pageProps} />
}

export default MyApp
