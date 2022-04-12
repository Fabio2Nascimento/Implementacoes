import faunadb from 'faunadb';
import { GraphQLClient, gql } from 'graphql-request'


export const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  domain:'db.eu.fauna.com',
  port:443,
  scheme:'https',
  
});
/*
const graphQLClient = new GraphQLClient('https://graphql.fauna.com/graphql', {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_ADMIN_KEY}`,
  },
})


export const listGuestbookEntries = () => {
  const query = gql`
    query Entries($size: Int) {
      entries(_size: $size) {
        data {
          _id
          _ts
          name
          message
          createdAt
        }
      }
    }
  `

  return graphQLClient
    .request(query, { size: 999 })
    .then(({ entries: { data } }) => data)
}
*/