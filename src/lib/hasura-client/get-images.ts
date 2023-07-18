import gql from 'graphql-tag';
import client from './client';

const query = gql`
  query getImages($album_id: Int) {
    image(where: { album_id: { _eq: $album_id } }, order_by: { created_at: asc }) {
      image_id
      path
      size
      width
      height
      created_at
    }
  }
`;

export default async function getAlbumImageList(album_id: number) {
  const res = await client.query({
    query,
    variables: {
      album_id,
    },
  });

  if (res.errors) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.image;
}
