import gql from 'graphql-tag';
import { InsertImagesMutationVariables } from '@/gql/graphql';
import client from './client';

const mutation = gql`
  mutation insertImages($objects: [image_insert_input!]!) {
    insert_image(objects: $objects) {
      affected_rows
      returning {
        album_id
        created_at
        image_id
        path
      }
    }
  }
`;

const insertImages = async (variables: InsertImagesMutationVariables, token?: string, userId?: string) => {
  try {
    const res = await client({ token, id: userId }).mutate({
      mutation,
      variables,
      fetchPolicy: 'network-only',
      context: { fetchOptions: { cache: 'no-store' } },
    });

    if (res.errors || !res.data?.insert_image) {
      // eslint-disable-next-line no-console
      console.error(res.errors);
      throw res.errors;
    }

    return res.data.insert_image;
  } catch (e) {
    console.log('e', e);
    throw e;
  }
};

export default insertImages;
