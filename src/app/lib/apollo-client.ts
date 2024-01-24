import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
