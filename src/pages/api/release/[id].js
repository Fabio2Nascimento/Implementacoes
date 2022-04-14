import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
  try {
    const { id } = req.query
    if (req.method == 'PUT') {
      
      await faunaClient.query(
        q.Update(q.Ref(q.Collection('releases'), id), {
          data: req.body
        })
      )

      res.status(200).json()
    }

    if (req.method == 'DELETE') {
      
      await faunaClient.query(
        q.Delete(q.Ref(q.Collection('releases'), id))
      )

      res.status(204).json()
    }
  } catch (e) {
    res.status(500).json({ error: e.error })
  }
}
