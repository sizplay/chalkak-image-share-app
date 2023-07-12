import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.HASURA_PROJECT_ENDPOINT,
    headers: { 'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '' },
    fetchOptions: { cache: 'no-store' },
  }),
  cache: new InMemoryCache(),
  // TODO cache 최적화 작업 필요.
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

export default client;
