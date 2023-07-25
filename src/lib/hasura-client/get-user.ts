import gql from 'graphql-tag';
import client from './client';

const query = gql`
  query user($email: String) {
    users(where: { email: { _eq: $email } }) {
      id
    }
  }
`;

export default async function getUser(email: string) {
  const res = await client().query({
    query,
    variables: {
      email,
    },
  });

  if (res.errors) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.users[0].id;
}
