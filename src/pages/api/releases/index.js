import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
  try {
    if (req.method == 'GET') {
      let query = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('releases'))),
          q.Lambda(show => q.Get(show))
        )
      )
      
      const result = query.data.map(res => (
        {
          id: res.ref.id,
          sistema: res.data.sistema,
          date: res.data.date,
          version: res.data.version,
          title: res.data.title,
          description: res.data.description.map(des => des)
        }))
      res.status(200).json({ data: result })
    }
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
}
