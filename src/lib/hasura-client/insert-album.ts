import gql from 'graphql-tag';
import { InsertAlbumMutationVariables } from '@/gql/graphql';
import client from './client';

const mutation = gql`
  mutation insertAlbum($object: album_insert_input!) {
    insert_album_one(object: $object) {
      album_id
      created_at
      created_by
      title
      subtitle
      icon
      background
    }
  }
`;

const insertAlbum = async (variables: InsertAlbumMutationVariables) => {
  const res = await client().mutate({
    mutation,
    variables,
    fetchPolicy: 'network-only',
    context: { fetchOptions: { cache: 'no-store' } },
  });

  if (res.errors || !res.data?.insert_album_one) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.insert_album_one;
};

export default insertAlbum;
