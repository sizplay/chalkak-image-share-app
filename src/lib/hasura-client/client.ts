import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

type Headers = Record<string, string>;

const apolloclientWithId = (id?: string) => {
  const reqHeaders: Headers = {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '',
  };

  if (id) {
    reqHeaders['x-hasura-user-id'] = id;
    reqHeaders['x-hasura-role'] = 'user';
    reqHeaders['x-hasura-default-role'] = 'user';
    reqHeaders['x-hasura-allowed-roles'] = 'user';
  }

  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.HASURA_PROJECT_ENDPOINT,
      headers: reqHeaders,
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
};

export default apolloclientWithId;
