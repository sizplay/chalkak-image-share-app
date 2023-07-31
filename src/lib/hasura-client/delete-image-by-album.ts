import gql from 'graphql-tag';
import client from './client';

const mutation = gql`
  mutation deleteImageByAlbumId($album_id: Int!) {
    delete_image(where: { album_id: { _eq: $album_id } }) {
      affected_rows
      returning {
        album_id
        image_id
        path
      }
    }
  }
`;

export default async function deleteImageByAlbumId(album_id: number, token?: string, userId?: string) {
  const res = await client({ token, id: userId }).mutate({
    mutation,
    variables: { album_id },
    fetchPolicy: 'network-only',
    context: { fetchOptions: { cache: 'no-store' } },
  });

  if (res.errors || !res.data?.delete_image) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.delete_image;
}
