import { gql } from 'graphql-request'
import { getClient } from '@/service/graphQLClient'

/**
 * Get all the courses from the data store
 * @returns An Array of course data
 */
export const getAllProducts = async () => {
  const client = getClient(false)
  const gqlResponse: any = await client.request(
    gql`
      query allProducts {
        allProduct {
          edges {
            node {
              id
              name
              price
              media {
                ... on Asset {
                  id
                  src
                }
              }
              description {
                json
              }
              slug
              category
            }
          }
        }
      }
    `
  )

  return {
    data: gqlResponse?.allProduct?.edges || [],
    totalCount: gqlResponse?.allProduct?.totalCount || 0,
  }
}
