import gql from "graphql-tag";
import {
    IInsertImageMutation,
    IInsertImageMutationVariables,
} from "../hasura-types";
import client from "./client";

const mutation = gql`
  mutation insertImage($objects: [image_insert_input!]!) {
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

const insertImage = async (
    variables: IInsertImageMutationVariables
) => {
    const res = await client.mutate<
        IInsertImageMutation,
        IInsertImageMutationVariables
    >({
        mutation,
        variables,
        fetchPolicy: "network-only",
        context: { fetchOptions: { cache: "no-store" } },
    });

    if (res.errors || !res.data?.insert_image) {
        // eslint-disable-next-line no-console
        console.error(res.errors);
        throw res.errors;
    }

    return res.data.insert_image;
};

export default insertImage;
