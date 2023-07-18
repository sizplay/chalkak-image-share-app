import gql from 'graphql-tag';
import { UpdateAlbumMutationVariables } from '@/gql/graphql';
import client from './client';

const mutation = gql`
  mutation updateAlbum($album_id: Int!, $_set: album_set_input!) {
    update_album_by_pk(pk_columns: { album_id: $album_id }, _set: $_set) {
      album_id
    }
  }
`;

const updateAlbum = async (variables: UpdateAlbumMutationVariables) => {
  const res = await client.mutate({
    mutation,
    variables,
    fetchPolicy: 'network-only',
    context: { fetchOptions: { cache: 'no-store' } },
  });

  if (res.errors || !res.data?.update_album_by_pk) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.update_album_by_pk;
};

export default updateAlbum;
