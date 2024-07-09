import { gql } from 'graphql-request'
import { getClient } from '@/service/graphQLClient'
/**
 *
 * @param slug Get a Course information by the slug
 * @returns A Course data object
 */
export const getProduct = async (slug: String) => {
  const client = getClient(false)
  const gqlResponse: any = await client.request(
    gql`
      query allProduct($slug: String) {
        allProduct(where: { slug: { eq: $slug } }) {
          edges {
            node {
              media {
                ... on Asset {
                  id
                  src
                }
              }
              id
              name
              price
              description {
                json
              }
              slug
            }
          }
        }
      }
    `,
    { slug: slug }
  )

  return {
    data: gqlResponse?.allProduct?.edges?.[0]?.node || {},
  }
}
