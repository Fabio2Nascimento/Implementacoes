import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
  try {
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
