import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
  try {
    if (req.method == 'GET') {
      let query = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('analytic')), {
            size: 1000,
          }),
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

      res.status(200).json({ data: result})
    }
    if (req.method == 'POST') {
      await faunaClient.query(
        q.Create(q.Collection('analytic'), { data: req.body })
      )

      res.status(201).json()
    }
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
}
