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
          description: res.data.description.map(des => des)
        }))

      const ids = result.map(o => o.version)
      const release = result.filter(({ version }, index) => !ids.includes(version, index + 1)).map(r => ({ release: r.version }))

      result
        .slice(0)
        .reverse().sort(function (a, b) {
          if (a.version < b.version || a.sistema < b.sistema) {
            return -1;
          } else {
            return true;
          }
        })

      res.status(200).json({ data: [result, release] })
    }
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
}
