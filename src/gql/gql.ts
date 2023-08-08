/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation deleteAlbum($album_id: Int!) {\n    delete_album_by_pk(album_id: $album_id) {\n      album_id\n    }\n  }\n": types.DeleteAlbumDocument,
    "\n  mutation deleteImageByAlbumId($album_id: Int!) {\n    delete_image(where: { album_id: { _eq: $album_id } }) {\n      affected_rows\n      returning {\n        album_id\n        image_id\n        path\n      }\n    }\n  }\n": types.DeleteImageByAlbumIdDocument,
    "\n  mutation deleteImageById($image_id: Int!) {\n    delete_image_by_pk(image_id: $image_id) {\n      image_id\n      album_id\n      path\n    }\n  }\n": types.DeleteImageByIdDocument,
    "\n  query album($album_id: Int!) {\n    album_by_pk(album_id: $album_id) {\n      album_id\n      title\n      subtitle\n      icon\n      background\n      created_by\n      upload_path\n      images {\n        image_id\n        path\n        width\n        height\n      }\n    }\n  }\n": types.AlbumDocument,
    "\n  query myAlblums {\n    album(order_by: { created_at: desc }) {\n      album_id\n      created_at\n      title\n      subtitle\n      icon\n      background\n      upload_path\n      images {\n        image_id\n        path\n        size\n        width\n        height\n      }\n    }\n  }\n": types.MyAlblumsDocument,
    "\n  query getImages($album_id: Int) {\n    image(where: { album_id: { _eq: $album_id } }, order_by: { created_at: asc }) {\n      image_id\n      path\n      size\n      width\n      height\n      created_at\n    }\n  }\n": types.GetImagesDocument,
    "\n  query user($email: String) {\n    users(where: { email: { _eq: $email } }) {\n      id\n    }\n  }\n": types.UserDocument,
    "\n  query users {\n    users {\n      id\n      name\n      email\n    }\n  }\n": types.UsersDocument,
    "\n  mutation insertAlbum($object: album_insert_input!) {\n    insert_album_one(object: $object) {\n      album_id\n      created_at\n      created_by\n      title\n      subtitle\n      icon\n      background\n      upload_path\n    }\n  }\n": types.InsertAlbumDocument,
    "\n  mutation insertImages($objects: [image_insert_input!]!) {\n    insert_image(objects: $objects) {\n      affected_rows\n      returning {\n        album_id\n        created_at\n        image_id\n        path\n      }\n    }\n  }\n": types.InsertImagesDocument,
    "\n  mutation updateAlbum($album_id: Int!, $_set: album_set_input!) {\n    update_album_by_pk(pk_columns: { album_id: $album_id }, _set: $_set) {\n      album_id\n    }\n  }\n": types.UpdateAlbumDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteAlbum($album_id: Int!) {\n    delete_album_by_pk(album_id: $album_id) {\n      album_id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteAlbum($album_id: Int!) {\n    delete_album_by_pk(album_id: $album_id) {\n      album_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteImageByAlbumId($album_id: Int!) {\n    delete_image(where: { album_id: { _eq: $album_id } }) {\n      affected_rows\n      returning {\n        album_id\n        image_id\n        path\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation deleteImageByAlbumId($album_id: Int!) {\n    delete_image(where: { album_id: { _eq: $album_id } }) {\n      affected_rows\n      returning {\n        album_id\n        image_id\n        path\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteImageById($image_id: Int!) {\n    delete_image_by_pk(image_id: $image_id) {\n      image_id\n      album_id\n      path\n    }\n  }\n"): (typeof documents)["\n  mutation deleteImageById($image_id: Int!) {\n    delete_image_by_pk(image_id: $image_id) {\n      image_id\n      album_id\n      path\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query album($album_id: Int!) {\n    album_by_pk(album_id: $album_id) {\n      album_id\n      title\n      subtitle\n      icon\n      background\n      created_by\n      upload_path\n      images {\n        image_id\n        path\n        width\n        height\n      }\n    }\n  }\n"): (typeof documents)["\n  query album($album_id: Int!) {\n    album_by_pk(album_id: $album_id) {\n      album_id\n      title\n      subtitle\n      icon\n      background\n      created_by\n      upload_path\n      images {\n        image_id\n        path\n        width\n        height\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query myAlblums {\n    album(order_by: { created_at: desc }) {\n      album_id\n      created_at\n      title\n      subtitle\n      icon\n      background\n      upload_path\n      images {\n        image_id\n        path\n        size\n        width\n        height\n      }\n    }\n  }\n"): (typeof documents)["\n  query myAlblums {\n    album(order_by: { created_at: desc }) {\n      album_id\n      created_at\n      title\n      subtitle\n      icon\n      background\n      upload_path\n      images {\n        image_id\n        path\n        size\n        width\n        height\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getImages($album_id: Int) {\n    image(where: { album_id: { _eq: $album_id } }, order_by: { created_at: asc }) {\n      image_id\n      path\n      size\n      width\n      height\n      created_at\n    }\n  }\n"): (typeof documents)["\n  query getImages($album_id: Int) {\n    image(where: { album_id: { _eq: $album_id } }, order_by: { created_at: asc }) {\n      image_id\n      path\n      size\n      width\n      height\n      created_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query user($email: String) {\n    users(where: { email: { _eq: $email } }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query user($email: String) {\n    users(where: { email: { _eq: $email } }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query users {\n    users {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  query users {\n    users {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation insertAlbum($object: album_insert_input!) {\n    insert_album_one(object: $object) {\n      album_id\n      created_at\n      created_by\n      title\n      subtitle\n      icon\n      background\n      upload_path\n    }\n  }\n"): (typeof documents)["\n  mutation insertAlbum($object: album_insert_input!) {\n    insert_album_one(object: $object) {\n      album_id\n      created_at\n      created_by\n      title\n      subtitle\n      icon\n      background\n      upload_path\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation insertImages($objects: [image_insert_input!]!) {\n    insert_image(objects: $objects) {\n      affected_rows\n      returning {\n        album_id\n        created_at\n        image_id\n        path\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation insertImages($objects: [image_insert_input!]!) {\n    insert_image(objects: $objects) {\n      affected_rows\n      returning {\n        album_id\n        created_at\n        image_id\n        path\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateAlbum($album_id: Int!, $_set: album_set_input!) {\n    update_album_by_pk(pk_columns: { album_id: $album_id }, _set: $_set) {\n      album_id\n    }\n  }\n"): (typeof documents)["\n  mutation updateAlbum($album_id: Int!, $_set: album_set_input!) {\n    update_album_by_pk(pk_columns: { album_id: $album_id }, _set: $_set) {\n      album_id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;