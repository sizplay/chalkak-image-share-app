import gql from 'graphql-tag';
import client from './client';

const query = gql`
  query users {
    user {
      user_id
      name
      email
    }
  }
`;

export default async function getUsers() {
  const res = await client.query({
    query,
    variables: {},
    fetchPolicy: 'network-only',
    context: { fetchOptions: { cache: 'no-store' } },
  });

  if (res.errors) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }
  return res.data.user;
}
