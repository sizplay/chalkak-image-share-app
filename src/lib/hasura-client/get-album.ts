import gql from "graphql-tag";
import { IGetAlbumQuery } from "../hasura-types";
import client from "./client";

const query = gql`
  query album($album_id: Int!) {
    album_by_pk(album_id: $album_id) {
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

export default async function getAlbum(album_id: number) {
  const res = await client.query<IGetAlbumQuery>({
    query,
    variables: {
      album_id
    },
  });

  if (res.errors) {
    // eslint-disable-next-line no-console
    console.error(res.errors);
    throw res.errors;
  }

  return res.data.album_by_pk;
}
