/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['uuid']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<Int_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['bigint']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** 사진앨범 */
export type Album = {
  __typename?: 'album';
  album_id: Scalars['Int']['output'];
  background?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  create_user: Users;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  images: Array<Image>;
  /** An aggregate relationship */
  images_aggregate: Image_Aggregate;
  is_shared: Scalars['Boolean']['output'];
  /** An object relationship */
  main_image?: Maybe<Image>;
  main_image_id?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** 사진앨범 */
export type AlbumImagesArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


/** 사진앨범 */
export type AlbumImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};

/** aggregated selection of "album" */
export type Album_Aggregate = {
  __typename?: 'album_aggregate';
  aggregate?: Maybe<Album_Aggregate_Fields>;
  nodes: Array<Album>;
};

export type Album_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Album_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Album_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Album_Aggregate_Bool_Exp_Count>;
};

export type Album_Aggregate_Bool_Exp_Bool_And = {
  arguments: Album_Select_Column_Album_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Album_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Album_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Album_Select_Column_Album_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Album_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Album_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Album_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Album_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "album" */
export type Album_Aggregate_Fields = {
  __typename?: 'album_aggregate_fields';
  avg?: Maybe<Album_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Album_Max_Fields>;
  min?: Maybe<Album_Min_Fields>;
  stddev?: Maybe<Album_Stddev_Fields>;
  stddev_pop?: Maybe<Album_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Album_Stddev_Samp_Fields>;
  sum?: Maybe<Album_Sum_Fields>;
  var_pop?: Maybe<Album_Var_Pop_Fields>;
  var_samp?: Maybe<Album_Var_Samp_Fields>;
  variance?: Maybe<Album_Variance_Fields>;
};


/** aggregate fields of "album" */
export type Album_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Album_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "album" */
export type Album_Aggregate_Order_By = {
  avg?: InputMaybe<Album_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Album_Max_Order_By>;
  min?: InputMaybe<Album_Min_Order_By>;
  stddev?: InputMaybe<Album_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Album_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Album_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Album_Sum_Order_By>;
  var_pop?: InputMaybe<Album_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Album_Var_Samp_Order_By>;
  variance?: InputMaybe<Album_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "album" */
export type Album_Arr_Rel_Insert_Input = {
  data: Array<Album_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Album_On_Conflict>;
};

/** aggregate avg on columns */
export type Album_Avg_Fields = {
  __typename?: 'album_avg_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "album" */
export type Album_Avg_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "album". All fields are combined with a logical 'AND'. */
export type Album_Bool_Exp = {
  _and?: InputMaybe<Array<Album_Bool_Exp>>;
  _not?: InputMaybe<Album_Bool_Exp>;
  _or?: InputMaybe<Array<Album_Bool_Exp>>;
  album_id?: InputMaybe<Int_Comparison_Exp>;
  background?: InputMaybe<String_Comparison_Exp>;
  create_user?: InputMaybe<Users_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  images?: InputMaybe<Image_Bool_Exp>;
  images_aggregate?: InputMaybe<Image_Aggregate_Bool_Exp>;
  is_shared?: InputMaybe<Boolean_Comparison_Exp>;
  main_image?: InputMaybe<Image_Bool_Exp>;
  main_image_id?: InputMaybe<Int_Comparison_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "album" */
export enum Album_Constraint {
  /** unique or primary key constraint on columns "album_id" */
  AlbumPkey = 'album_pkey'
}

/** input type for incrementing numeric columns in table "album" */
export type Album_Inc_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  main_image_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "album" */
export type Album_Insert_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  create_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Image_Arr_Rel_Insert_Input>;
  is_shared?: InputMaybe<Scalars['Boolean']['input']>;
  main_image?: InputMaybe<Image_Obj_Rel_Insert_Input>;
  main_image_id?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Album_Max_Fields = {
  __typename?: 'album_max_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  main_image_id?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "album" */
export type Album_Max_Order_By = {
  album_id?: InputMaybe<Order_By>;
  background?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Album_Min_Fields = {
  __typename?: 'album_min_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  main_image_id?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "album" */
export type Album_Min_Order_By = {
  album_id?: InputMaybe<Order_By>;
  background?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "album" */
export type Album_Mutation_Response = {
  __typename?: 'album_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Album>;
};

/** on_conflict condition type for table "album" */
export type Album_On_Conflict = {
  constraint: Album_Constraint;
  update_columns?: Array<Album_Update_Column>;
  where?: InputMaybe<Album_Bool_Exp>;
};

/** Ordering options when selecting data from "album". */
export type Album_Order_By = {
  album_id?: InputMaybe<Order_By>;
  background?: InputMaybe<Order_By>;
  create_user?: InputMaybe<Users_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  images_aggregate?: InputMaybe<Image_Aggregate_Order_By>;
  is_shared?: InputMaybe<Order_By>;
  main_image?: InputMaybe<Image_Order_By>;
  main_image_id?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: album */
export type Album_Pk_Columns_Input = {
  album_id: Scalars['Int']['input'];
};

/** select columns of table "album" */
export enum Album_Select_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  Background = 'background',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Icon = 'icon',
  /** column name */
  IsShared = 'is_shared',
  /** column name */
  MainImageId = 'main_image_id',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title'
}

/** select "album_aggregate_bool_exp_bool_and_arguments_columns" columns of table "album" */
export enum Album_Select_Column_Album_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsShared = 'is_shared'
}

/** select "album_aggregate_bool_exp_bool_or_arguments_columns" columns of table "album" */
export enum Album_Select_Column_Album_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsShared = 'is_shared'
}

/** input type for updating data in table "album" */
export type Album_Set_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  is_shared?: InputMaybe<Scalars['Boolean']['input']>;
  main_image_id?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Album_Stddev_Fields = {
  __typename?: 'album_stddev_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "album" */
export type Album_Stddev_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Album_Stddev_Pop_Fields = {
  __typename?: 'album_stddev_pop_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "album" */
export type Album_Stddev_Pop_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Album_Stddev_Samp_Fields = {
  __typename?: 'album_stddev_samp_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "album" */
export type Album_Stddev_Samp_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "album" */
export type Album_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Album_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Album_Stream_Cursor_Value_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  is_shared?: InputMaybe<Scalars['Boolean']['input']>;
  main_image_id?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Album_Sum_Fields = {
  __typename?: 'album_sum_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  main_image_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "album" */
export type Album_Sum_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** update columns of table "album" */
export enum Album_Update_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  Background = 'background',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Icon = 'icon',
  /** column name */
  IsShared = 'is_shared',
  /** column name */
  MainImageId = 'main_image_id',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title'
}

export type Album_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Album_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Album_Set_Input>;
  /** filter the rows which have to be updated */
  where: Album_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Album_Var_Pop_Fields = {
  __typename?: 'album_var_pop_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "album" */
export type Album_Var_Pop_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Album_Var_Samp_Fields = {
  __typename?: 'album_var_samp_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "album" */
export type Album_Var_Samp_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Album_Variance_Fields = {
  __typename?: 'album_variance_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "album" */
export type Album_Variance_Order_By = {
  album_id?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** 이미지 */
export type Image = {
  __typename?: 'image';
  /** An array relationship */
  album: Array<Album>;
  /** An aggregate relationship */
  album_aggregate: Album_Aggregate;
  album_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  image_id: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** 이미지 */
export type ImageAlbumArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


/** 이미지 */
export type ImageAlbum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};

/** aggregated selection of "image" */
export type Image_Aggregate = {
  __typename?: 'image_aggregate';
  aggregate?: Maybe<Image_Aggregate_Fields>;
  nodes: Array<Image>;
};

export type Image_Aggregate_Bool_Exp = {
  count?: InputMaybe<Image_Aggregate_Bool_Exp_Count>;
};

export type Image_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Image_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "image" */
export type Image_Aggregate_Fields = {
  __typename?: 'image_aggregate_fields';
  avg?: Maybe<Image_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Image_Max_Fields>;
  min?: Maybe<Image_Min_Fields>;
  stddev?: Maybe<Image_Stddev_Fields>;
  stddev_pop?: Maybe<Image_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Image_Stddev_Samp_Fields>;
  sum?: Maybe<Image_Sum_Fields>;
  var_pop?: Maybe<Image_Var_Pop_Fields>;
  var_samp?: Maybe<Image_Var_Samp_Fields>;
  variance?: Maybe<Image_Variance_Fields>;
};


/** aggregate fields of "image" */
export type Image_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "image" */
export type Image_Aggregate_Order_By = {
  avg?: InputMaybe<Image_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Image_Max_Order_By>;
  min?: InputMaybe<Image_Min_Order_By>;
  stddev?: InputMaybe<Image_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Image_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Image_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Image_Sum_Order_By>;
  var_pop?: InputMaybe<Image_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Image_Var_Samp_Order_By>;
  variance?: InputMaybe<Image_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "image" */
export type Image_Arr_Rel_Insert_Input = {
  data: Array<Image_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Image_On_Conflict>;
};

/** aggregate avg on columns */
export type Image_Avg_Fields = {
  __typename?: 'image_avg_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "image" */
export type Image_Avg_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "image". All fields are combined with a logical 'AND'. */
export type Image_Bool_Exp = {
  _and?: InputMaybe<Array<Image_Bool_Exp>>;
  _not?: InputMaybe<Image_Bool_Exp>;
  _or?: InputMaybe<Array<Image_Bool_Exp>>;
  album?: InputMaybe<Album_Bool_Exp>;
  album_aggregate?: InputMaybe<Album_Aggregate_Bool_Exp>;
  album_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "image" */
export enum Image_Constraint {
  /** unique or primary key constraint on columns "image_id" */
  ImagePkey = 'image_pkey'
}

/** input type for incrementing numeric columns in table "image" */
export type Image_Inc_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "image" */
export type Image_Insert_Input = {
  album?: InputMaybe<Album_Arr_Rel_Insert_Input>;
  album_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Image_Max_Fields = {
  __typename?: 'image_max_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "image" */
export type Image_Max_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Image_Min_Fields = {
  __typename?: 'image_min_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "image" */
export type Image_Min_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "image" */
export type Image_Mutation_Response = {
  __typename?: 'image_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Image>;
};

/** input type for inserting object relation for remote table "image" */
export type Image_Obj_Rel_Insert_Input = {
  data: Image_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Image_On_Conflict>;
};

/** on_conflict condition type for table "image" */
export type Image_On_Conflict = {
  constraint: Image_Constraint;
  update_columns?: Array<Image_Update_Column>;
  where?: InputMaybe<Image_Bool_Exp>;
};

/** Ordering options when selecting data from "image". */
export type Image_Order_By = {
  album_aggregate?: InputMaybe<Album_Aggregate_Order_By>;
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: image */
export type Image_Pk_Columns_Input = {
  image_id: Scalars['Int']['input'];
};

/** select columns of table "image" */
export enum Image_Select_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Height = 'height',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Path = 'path',
  /** column name */
  Size = 'size',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "image" */
export type Image_Set_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Image_Stddev_Fields = {
  __typename?: 'image_stddev_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "image" */
export type Image_Stddev_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Image_Stddev_Pop_Fields = {
  __typename?: 'image_stddev_pop_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "image" */
export type Image_Stddev_Pop_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Image_Stddev_Samp_Fields = {
  __typename?: 'image_stddev_samp_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "image" */
export type Image_Stddev_Samp_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "image" */
export type Image_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Image_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Image_Stream_Cursor_Value_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Image_Sum_Fields = {
  __typename?: 'image_sum_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "image" */
export type Image_Sum_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** update columns of table "image" */
export enum Image_Update_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Height = 'height',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Path = 'path',
  /** column name */
  Size = 'size',
  /** column name */
  Width = 'width'
}

export type Image_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Image_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Image_Set_Input>;
  /** filter the rows which have to be updated */
  where: Image_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Image_Var_Pop_Fields = {
  __typename?: 'image_var_pop_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "image" */
export type Image_Var_Pop_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Image_Var_Samp_Fields = {
  __typename?: 'image_var_samp_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "image" */
export type Image_Var_Samp_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Image_Variance_Fields = {
  __typename?: 'image_variance_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "image" */
export type Image_Variance_Order_By = {
  album_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "album" */
  delete_album?: Maybe<Album_Mutation_Response>;
  /** delete single row from the table: "album" */
  delete_album_by_pk?: Maybe<Album>;
  /** delete data from the table: "image" */
  delete_image?: Maybe<Image_Mutation_Response>;
  /** delete single row from the table: "image" */
  delete_image_by_pk?: Maybe<Image>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "album" */
  insert_album?: Maybe<Album_Mutation_Response>;
  /** insert a single row into the table: "album" */
  insert_album_one?: Maybe<Album>;
  /** insert data into the table: "image" */
  insert_image?: Maybe<Image_Mutation_Response>;
  /** insert a single row into the table: "image" */
  insert_image_one?: Maybe<Image>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "album" */
  update_album?: Maybe<Album_Mutation_Response>;
  /** update single row of the table: "album" */
  update_album_by_pk?: Maybe<Album>;
  /** update multiples rows of table: "album" */
  update_album_many?: Maybe<Array<Maybe<Album_Mutation_Response>>>;
  /** update data of the table: "image" */
  update_image?: Maybe<Image_Mutation_Response>;
  /** update single row of the table: "image" */
  update_image_by_pk?: Maybe<Image>;
  /** update multiples rows of table: "image" */
  update_image_many?: Maybe<Array<Maybe<Image_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AlbumArgs = {
  where: Album_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Album_By_PkArgs = {
  album_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ImageArgs = {
  where: Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Image_By_PkArgs = {
  image_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AlbumArgs = {
  objects: Array<Album_Insert_Input>;
  on_conflict?: InputMaybe<Album_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_OneArgs = {
  object: Album_Insert_Input;
  on_conflict?: InputMaybe<Album_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ImageArgs = {
  objects: Array<Image_Insert_Input>;
  on_conflict?: InputMaybe<Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Image_OneArgs = {
  object: Image_Insert_Input;
  on_conflict?: InputMaybe<Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AlbumArgs = {
  _inc?: InputMaybe<Album_Inc_Input>;
  _set?: InputMaybe<Album_Set_Input>;
  where: Album_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Album_By_PkArgs = {
  _inc?: InputMaybe<Album_Inc_Input>;
  _set?: InputMaybe<Album_Set_Input>;
  pk_columns: Album_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Album_ManyArgs = {
  updates: Array<Album_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ImageArgs = {
  _inc?: InputMaybe<Image_Inc_Input>;
  _set?: InputMaybe<Image_Set_Input>;
  where: Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Image_By_PkArgs = {
  _inc?: InputMaybe<Image_Inc_Input>;
  _set?: InputMaybe<Image_Set_Input>;
  pk_columns: Image_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Image_ManyArgs = {
  updates: Array<Image_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  album: Array<Album>;
  /** An aggregate relationship */
  album_aggregate: Album_Aggregate;
  /** fetch data from the table: "album" using primary key columns */
  album_by_pk?: Maybe<Album>;
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch aggregated fields from the table: "image" */
  image_aggregate: Image_Aggregate;
  /** fetch data from the table: "image" using primary key columns */
  image_by_pk?: Maybe<Image>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAlbumArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Query_RootAlbum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Query_RootAlbum_By_PkArgs = {
  album_id: Scalars['Int']['input'];
};


export type Query_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Query_RootImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Query_RootImage_By_PkArgs = {
  image_id: Scalars['Int']['input'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  sessionToken: Scalars['String']['output'];
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  album: Array<Album>;
  /** An aggregate relationship */
  album_aggregate: Album_Aggregate;
  /** fetch data from the table: "album" using primary key columns */
  album_by_pk?: Maybe<Album>;
  /** fetch data from the table in a streaming manner: "album" */
  album_stream: Array<Album>;
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch aggregated fields from the table: "image" */
  image_aggregate: Image_Aggregate;
  /** fetch data from the table: "image" using primary key columns */
  image_by_pk?: Maybe<Image>;
  /** fetch data from the table in a streaming manner: "image" */
  image_stream: Array<Image>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAlbumArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Subscription_RootAlbum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Subscription_RootAlbum_By_PkArgs = {
  album_id: Scalars['Int']['input'];
};


export type Subscription_RootAlbum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Album_Stream_Cursor_Input>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Subscription_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Subscription_RootImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Subscription_RootImage_By_PkArgs = {
  image_id: Scalars['Int']['input'];
};


export type Subscription_RootImage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Image_Stream_Cursor_Input>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** An array relationship */
  albums: Array<Album>;
  /** An aggregate relationship */
  albums_aggregate: Album_Aggregate;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAlbumsArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAlbums_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  albums?: InputMaybe<Album_Bool_Exp>;
  albums_aggregate?: InputMaybe<Album_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  albums?: InputMaybe<Album_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  albums_aggregate?: InputMaybe<Album_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: 'verification_tokens';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate';
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey'
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String']['input'];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

export type DeleteAlbumMutationVariables = Exact<{
  album_id: Scalars['Int']['input'];
}>;


export type DeleteAlbumMutation = { __typename?: 'mutation_root', delete_album_by_pk?: { __typename?: 'album', album_id: number } | null };

export type DeleteImageByAlbumIdMutationVariables = Exact<{
  album_id: Scalars['Int']['input'];
}>;


export type DeleteImageByAlbumIdMutation = { __typename?: 'mutation_root', delete_image?: { __typename?: 'image_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'image', album_id: number, image_id: number, path: string }> } | null };

export type DeleteImageByIdMutationVariables = Exact<{
  image_id: Scalars['Int']['input'];
}>;


export type DeleteImageByIdMutation = { __typename?: 'mutation_root', delete_image_by_pk?: { __typename?: 'image', image_id: number, album_id: number, path: string } | null };

export type AlbumQueryVariables = Exact<{
  album_id: Scalars['Int']['input'];
}>;


export type AlbumQuery = { __typename?: 'query_root', album_by_pk?: { __typename?: 'album', album_id: number, created_at: any, is_shared: boolean, title: string, subtitle?: string | null, icon?: string | null, background?: string | null, main_image?: { __typename?: 'image', image_id: number, path: string, size?: number | null, width?: number | null, height?: number | null } | null } | null };

export type MyAlblumsQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type MyAlblumsQuery = { __typename?: 'query_root', album: Array<{ __typename?: 'album', album_id: number, created_at: any, is_shared: boolean, title: string, subtitle?: string | null }> };

export type GetImagesQueryVariables = Exact<{
  album_id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetImagesQuery = { __typename?: 'query_root', image: Array<{ __typename?: 'image', image_id: number, path: string, size?: number | null, width?: number | null, height?: number | null, created_at: any }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name?: string | null, email?: string | null }> };

export type InsertAlbumMutationVariables = Exact<{
  object: Album_Insert_Input;
}>;


export type InsertAlbumMutation = { __typename?: 'mutation_root', insert_album_one?: { __typename?: 'album', album_id: number, created_at: any, title: string, subtitle?: string | null, is_shared: boolean } | null };

export type InsertImagesMutationVariables = Exact<{
  objects: Array<Image_Insert_Input> | Image_Insert_Input;
}>;


export type InsertImagesMutation = { __typename?: 'mutation_root', insert_image?: { __typename?: 'image_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'image', album_id: number, created_at: any, image_id: number, path: string }> } | null };

export type UpdateAlbumMutationVariables = Exact<{
  album_id: Scalars['Int']['input'];
  _set: Album_Set_Input;
}>;


export type UpdateAlbumMutation = { __typename?: 'mutation_root', update_album_by_pk?: { __typename?: 'album', album_id: number } | null };


export const DeleteAlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAlbum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_album_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}}]}}]}}]} as unknown as DocumentNode<DeleteAlbumMutation, DeleteAlbumMutationVariables>;
export const DeleteImageByAlbumIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteImageByAlbumId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"album_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteImageByAlbumIdMutation, DeleteImageByAlbumIdMutationVariables>;
export const DeleteImageByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteImageById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_image_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<DeleteImageByIdMutation, DeleteImageByIdMutationVariables>;
export const AlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"album"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_shared"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"main_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<AlbumQuery, AlbumQueryVariables>;
export const MyAlblumsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myAlblums"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_shared"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}}]}}]} as unknown as DocumentNode<MyAlblumsQuery, MyAlblumsQueryVariables>;
export const GetImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"album_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<GetImagesQuery, GetImagesQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const InsertAlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertAlbum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"album_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_album_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"is_shared"}}]}}]}}]} as unknown as DocumentNode<InsertAlbumMutation, InsertAlbumMutationVariables>;
export const InsertImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"image_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<InsertImagesMutation, InsertImagesMutationVariables>;
export const UpdateAlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAlbum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"album_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_album_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}}]}}]}}]} as unknown as DocumentNode<UpdateAlbumMutation, UpdateAlbumMutationVariables>;