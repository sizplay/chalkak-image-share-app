"use server";

import gql from "graphql-tag";
import {
    IAlbum_Delete_Input,
    IDeleteAlbumMutation
} from "../hasura-types";
import client from "./client";

const mutation = gql`
  mutation deleteAlbum($album_id: Int!) {
    delete_album_by_pk(album_id: $album_id) {
      album_id
    }
  }
`;

export default async function deleteAlbum(album_id: number) {
    const res = await client.mutate<
        IDeleteAlbumMutation,
        IAlbum_Delete_Input
    >({
        mutation,
        variables: { album_id },
        fetchPolicy: "network-only",
        context: { fetchOptions: { cache: "no-store" } },
    });

    if (res.errors || !res.data?.delete_album_by_pk) {
        // eslint-disable-next-line no-console
        console.error(res.errors);
        throw res.errors;
    }

    return res.data.delete_album_by_pk;
}
