// A basic graphQL client to connect to the Hashnode's GraphQL APIs.
import { GraphQLClient, gql } from "graphql-request";


export type Settings = {
  host: string;
  first: number;
  endCursor?: string;
  tags?: string[];
  loadMore?: boolean;
};

export const getClient = () => {
  const client = new GraphQLClient(`https://gql.hashnode.com`);
  return client;
}




export const getAllPosts = async ({host, first=10, endCursor, tags}: Settings) => {
  const client = getClient();

  const data: any = await client.request(
    gql`
      query allPosts($first: Int!, $host: String, $endCursor: String, $tags: [ObjectId!]) {
        publication(host: $host) {
          title
          posts(first: $first, after: $endCursor, filter:{tags: $tags}) {
            totalDocuments
            pageInfo{
              hasNextPage
              endCursor
            }
            edges {
              node {
                author{
                  name
                  username
                }
                title
                subtitle
                brief
                url 
                content {
                  html
                  markdown
                }
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                  id
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `,
    { 
      first: first,
      host: host,
      endCursor: endCursor,
      tags: tags,
     }
  );

  return data?.publication?.posts;
};