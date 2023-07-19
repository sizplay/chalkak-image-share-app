import gql from 'graphql-tag';
import client from './client';

const query = gql`
  query myAlblums($user_id: uuid) {
    album(order_by: {created_at: asc}, where: {created_by: {_eq: $user_id}}) {
      album_id
      created_at
      is_shared
      title
      subtitle
    }
  }
`;

export default async function getAlbums(user_id: string) {
  const res = await client.query({
    query,
    variables: {
      user_id,
    },
  });

  if (res.errors) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.album;
}
