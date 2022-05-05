import { Keys, query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
  try {
    if (req.method == 'GET') {
      let query = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('analytic'))),
          q.Lambda(show => q.Get(show))
        )
      )

      const result = await query.data.map(res => (
        {
          id: res.ref.id,
          date: res.data.date,
          address: {
            city: res.data.city,
            state: res.data.state,
            countryCode: res.data.country_code,
            countryName: res.data.country_name
          },
          device: res.data.device
        }))
      const ids = result.map(o => o.id)

      const OS = result.filter(({ device }, index) => !result.map(o => o.device.os).includes(device.os, index + 1)).map(r => ({ system: r.device.os }))
      const cities = result.filter(({ address }, index) => !result.map(o => o.address.city).includes(address.city, index + 1)).map(r => ({ city: r.address.city }))
      const countries = result.filter(({ address }, index) => !result.map(o => o.address.state).includes(address.state, index + 1)).map(r => ({ state: r.address.state }))
      const browser = result.filter(({ device }, index) => !result.map(o => o.device.browser).includes(device.browser, index + 1)).map(r => ({ browser: r.device.browser }))
      const browsers = browser.map(b => Object.values(b).toString())
      const countBrowser = result.reduce((device, { browser }) => browser === 'Chrome' ? device += 1 : device, 0)

      // console.log(result.filter(obj => obj.device.browser === 'Opera').length)
      // console.log(Object.keys(browsers))
      // console.log(browsers.map(value => ({[value]: 0})))

      const results = {
        totalAccess: query.data.length,
        OS,
        browsers,
        locations: {
          cities,
          countries
        }
      }


      res.status(200).json({ data: results })
    }
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
}
