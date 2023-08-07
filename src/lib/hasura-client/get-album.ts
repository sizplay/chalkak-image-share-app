import gql from 'graphql-tag';
import client from './client';

const query = gql`
  query album($album_id: Int!) {
    album_by_pk(album_id: $album_id) {
      album_id
      title
      subtitle
      icon
      background
      created_by
      upload_path
      images {
        image_id
        path
        width
        height
      }
    }
  }
`;

export default async function getAlbum(album_id: number) {
  try {
    const res = await client({}).query({
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

    return res.data.album_by_pk;
  } catch (e) {
    console.log('e', e);
    throw e;
  }
}
