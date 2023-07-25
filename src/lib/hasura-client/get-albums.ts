import gql from 'graphql-tag';
import client from './client';

const query = gql`
  query myAlblums {
    album(order_by: { created_at: asc }) {
      album_id
      created_at
      title
      subtitle
      icon
      background
      images {
        image_id
        path
        size
        width
        height
      }
    }
  }
`;

export default async function getAlbums(userId: string | null) {
  const res = await client(userId || undefined).query({
    query,
  });

  if (res.errors) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.album;
}
