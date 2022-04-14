import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunadb'

export default async (req, res) => {
    try {
        const { module } = req.query
        if (req.method == 'GET') {
            let query = await faunaClient.query(
                q.Map(
                    q.Paginate(
                        q.Match(q.Index("module"), module.charAt(0).toUpperCase() + module.slice(1))
                    ),
                    q.Lambda(
                        "sistema",
                        q.Get(q.Var("sistema"))
                    )
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