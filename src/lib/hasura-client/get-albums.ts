import gql from 'graphql-tag';
import { IGetAlbumsQuery } from '../hasura-types';
import client from './client';

const query = gql`
  query myAlbums($user_id: Int) {
    album(order_by: { created_at: desc }, where: { created_by: { _eq: $user_id } }) {
      album_id
      created_at
      is_shared
      title
      subtitle
      main_image {
        image_id
        path
        size
        width
        height
      }
    }
  }
`;

export default async function getAlbums(user_id: number) {
  const res = await client.query<IGetAlbumsQuery>({
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
