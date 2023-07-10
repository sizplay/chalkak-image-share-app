import gql from "graphql-tag";
import {
    IUpdateAlbumMutation,
    IAlbum_Update_Input,
    IAlbum_Update_Variables,
} from "../hasura-types";
import client from "./client";

const mutation = gql`
  mutation updateAlbum($album_id: Int!, $_set: album_set_input!) {
    update_album_by_pk(pk_columns: {album_id: $album_id}, _set: $_set) {
      album_id
    }
  }
  
`;

const updateAlbum = async (
    variables: IAlbum_Update_Variables
) => {
    const res = await client.mutate<
        IUpdateAlbumMutation,
        IAlbum_Update_Variables
    >({
        mutation,
        variables,
        fetchPolicy: "network-only",
        context: { fetchOptions: { cache: "no-store" } },
    });

    if (res.errors || !res.data?.update_album_by_pk) {
        // eslint-disable-next-line no-console
        console.error(res.errors);
        throw res.errors;
    }

    return res.data.update_album_by_pk;
};

export default updateAlbum;
