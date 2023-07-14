export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: string[];
  bigint: number;
  date: string;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type IBoolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type IInt_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type IString_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type ITimestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type I_Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

export type IGetUsersQuery = {
  __typename?: 'query_root';
  user: Array<{
    __typename?: 'user';
    user_id: number;
    name: string;
    email: string;
  }>;
};

export type IGetAlbumsQuery = {
  __typename?: 'query_root';
  album: Array<{
    __typename?: 'album';
    album_id: number;
    created_at: string;
    is_shared: boolean;
    title: string;
    subtitle: string;
    main_image: {
      __typename?: 'image';
      image_id: number;
      path: string;
      size: number;
      width: number;
      height: number;
    };
  }>;
};

export type IGetAlbumQuery = {
  __typename?: 'query_root';
  album_by_pk: {
    __typename?: 'album';
    album_id: number;
    created_at: string;
    is_shared: boolean;
    title: string;
    subtitle: string;
    icon: string;
    background: string;
    main_image: {
      __typename?: 'image';
      image_id: number;
      path: string;
      size: number;
      width: number;
      height: number;
    };
  };
};

export type IGetImagesQuery = {
  __typename?: 'query_root';
  image: Array<{
    __typename?: 'image';
    image_id: number;
    path: string;
    size: number;
    width: number;
    height: number;
    created_at: string;
  }>;
};

export type IAlbum_Insert_Input = {
  created_by: InputMaybe<Scalars['Int']>;
  title: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type IAlbum_Insert_Variables = Exact<{
  object: IAlbum_Insert_Input;
}>;

export type IAlbum_Update_Input = {
  title?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  main_image_id?: InputMaybe<Scalars['Int']>;
  is_shared?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type IAlbum_Update_Variables = Exact<{
  album_id: InputMaybe<Scalars['Int']>;
  _set: IAlbum_Update_Input;
}>;

export type IInsertAlbumMutation = {
  __typename?: 'mutation_root';
  insert_album_one?: {
    __typename?: 'insert_album_one_response';
    album_id: number;
    created_at: string;
  } | null;
};

export type IUpdateAlbumMutation = {
  __typename?: 'mutation_root';
  update_album_by_pk?: {
    __typename?: 'update_album_by_pk_response';
    album_id: number;
  } | null;
};

export type IAlbum_Delete_Input = {
  album_id: InputMaybe<Scalars['Int']>;
};

export type IImage_Delete_Input = {
  album_id?: InputMaybe<Scalars['Int']>;
  image_id?: InputMaybe<Scalars['Int']>;
};

export type IDeleteAlbumMutation = {
  __typename?: 'mutation_root';
  delete_album_by_pk?: {
    __typename?: 'delete_album_by_pk_response';
    album_id: number;
  } | null;
};

export type IDeleteImageByPkMutation = {
  __typename?: 'mutation_root';
  delete_image_by_pk?: {
    __typename?: 'image';
    image_id: number;
    album_id: number;
    path: string;
  } | null;
};

export type IDeleteImageMutation = {
  __typename?: 'mutation_root';
  delete_image?: {
    __typename?: 'delete_image_response';
    affected_rows: number;
    returning: Array<{
      __typename?: 'image';
      image_id: number;
      album_id: number;
      path: string;
    }>;
  } | null;
};

export type IInsertImageMutation = {
  __typename?: 'mutation_root';
  insert_image?: {
    __typename?: 'image_mutation_response';
    affected_rows: number;
    returning: Array<{
      __typename?: 'image';
      image_id: number;
      album_id: number;
      path: string;
      created_at: string;
    }>;
  } | null;
};

export type IImage_Insert_Input = {
  album_id: InputMaybe<Scalars['Int']>;
  path: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
};

export type IInsertImageMutationVariables = Exact<{
  objects: Array<IImage_Insert_Input> | IImage_Insert_Input;
}>;
