import { query as q } from 'faunadb';
import { faunaClient } from '../../lib/faunadb';

export default async (req, res) => {

  try {
    if (req.method == 'GET') {
      let query = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('releases'))),
          q.Lambda((show) => q.Get(show))
        )
      );

      const result = query.data.map(res => res.data)
      res.status(200).json({ data: result });
    }
  } catch (e) {
    res.status(400).json({ error: e.error });
  }
  
}
