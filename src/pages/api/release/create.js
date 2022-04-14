import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
  try {
    if (req.method == 'POST') {
      //   console.log(req.body)
      const { sistema, date, version, title, description } = req.body
      await faunaClient.query(
        q.Create(q.Collection('releases'), {
          data: req.body
        })
      )

      res.status(201).json()
    }
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
}