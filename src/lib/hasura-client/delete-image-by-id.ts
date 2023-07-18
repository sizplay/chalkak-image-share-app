import gql from 'graphql-tag';
import client from './client';

const mutation = gql`
  mutation deleteImageById($image_id: Int!) {
    delete_image_by_pk(image_id: $image_id) {
      image_id
      album_id
      path
    }
  }
`;

export default async function deleteImageById(image_id: number) {
  const res = await client.mutate({
    mutation,
    variables: { image_id },
    fetchPolicy: 'network-only',
    context: { fetchOptions: { cache: 'no-store' } },
  });

  console.log(res);

  if (res.errors || !res.data?.delete_image_by_pk) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.delete_image_by_pk;
}
