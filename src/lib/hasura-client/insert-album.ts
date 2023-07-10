"use server";

import gql from "graphql-tag";
import {
    IInsertAlbumMutation,
    IAlbum_Insert_Input,
} from "../hasura-types";
import client from "./client";

const mutation = gql`
  mutation insertAlbum($object: album_insert_input) {
    insert_album_one(object: $object) {
      album_id
      created_at
    }
  }
`;

const insertAlbum = async (
    variables: IAlbum_Insert_Input
) => {
    const res = await client.mutate<
        IInsertAlbumMutation,
        IAlbum_Insert_Input
    >({
        mutation,
        variables,
        fetchPolicy: "network-only",
        context: { fetchOptions: { cache: "no-store" } },
    });

    if (res.errors || !res.data?.insert_album_one) {
        // eslint-disable-next-line no-console
        console.error(res.errors);
        throw res.errors;
    }

    return res.data.insert_album_one;
};

export default insertAlbum;
