import gql from 'graphql-tag';
import client from './client';

const query = gql`
  query myAlblums {
    album(order_by: { created_at: asc }) {
      album_id
      created_at
      is_shared
      title
      subtitle
    }
  }
`;

export default async function getAlbums() {
  const res = await client.query({
    query,
  });

  if (res.errors) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.album;
}
