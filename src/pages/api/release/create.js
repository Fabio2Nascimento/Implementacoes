import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
  try {
    if (req.method == 'POST') {
      //   console.log(req.body)
      const { sistema, date, version, title, description } = req.body

      if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)){
        return res.status(409).json('formato esperado é YYYY-MM-DD')
      }

      const data = {
        sistema: sistema.charAt(0).toUpperCase() + sistema.slice(1),
        date: date,
        version: version,
        description: description.map(des => des)
      }
      await faunaClient.query(
        q.Create(q.Collection('releases'), {
          data
        })
      )

      res.status(201).json()
    }
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
}
