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
  timestamptz: { input: any; output: any; }
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

/** 사진앨범 */
export type Album = {
  __typename?: 'album';
  album_id: Scalars['Int']['output'];
  /** An object relationship */
  create_user: User;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['Int']['output'];
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
  created_by?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "album" */
export type Album_Avg_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "album". All fields are combined with a logical 'AND'. */
export type Album_Bool_Exp = {
  _and?: InputMaybe<Array<Album_Bool_Exp>>;
  _not?: InputMaybe<Album_Bool_Exp>;
  _or?: InputMaybe<Array<Album_Bool_Exp>>;
  album_id?: InputMaybe<Int_Comparison_Exp>;
  create_user?: InputMaybe<User_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
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
  created_by?: InputMaybe<Scalars['Int']['input']>;
  main_image_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "album" */
export type Album_Insert_Input = {
  album_id?: InputMaybe<Scalars['Int']['input']>;
  create_user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
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
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  main_image_id?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "album" */
export type Album_Max_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Album_Min_Fields = {
  __typename?: 'album_min_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  main_image_id?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "album" */
export type Album_Min_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
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
  create_user?: InputMaybe<User_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
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
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  is_shared?: InputMaybe<Scalars['Boolean']['input']>;
  main_image_id?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Album_Stddev_Fields = {
  __typename?: 'album_stddev_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "album" */
export type Album_Stddev_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Album_Stddev_Pop_Fields = {
  __typename?: 'album_stddev_pop_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "album" */
export type Album_Stddev_Pop_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Album_Stddev_Samp_Fields = {
  __typename?: 'album_stddev_samp_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "album" */
export type Album_Stddev_Samp_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  is_shared?: InputMaybe<Scalars['Boolean']['input']>;
  main_image_id?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Album_Sum_Fields = {
  __typename?: 'album_sum_fields';
  album_id?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  main_image_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "album" */
export type Album_Sum_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** update columns of table "album" */
export enum Album_Update_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
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
  created_by?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "album" */
export type Album_Var_Pop_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Album_Var_Samp_Fields = {
  __typename?: 'album_var_samp_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "album" */
export type Album_Var_Samp_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Album_Variance_Fields = {
  __typename?: 'album_variance_fields';
  album_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  main_image_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "album" */
export type Album_Variance_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  main_image_id?: InputMaybe<Order_By>;
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
  album_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  image_id: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
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
  /** delete data from the table: "album" */
  delete_album?: Maybe<Album_Mutation_Response>;
  /** delete single row from the table: "album" */
  delete_album_by_pk?: Maybe<Album>;
  /** delete data from the table: "image" */
  delete_image?: Maybe<Image_Mutation_Response>;
  /** delete single row from the table: "image" */
  delete_image_by_pk?: Maybe<Image>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "album" */
  insert_album?: Maybe<Album_Mutation_Response>;
  /** insert a single row into the table: "album" */
  insert_album_one?: Maybe<Album>;
  /** insert data into the table: "image" */
  insert_image?: Maybe<Image_Mutation_Response>;
  /** insert a single row into the table: "image" */
  insert_image_one?: Maybe<Image>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
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
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
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
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  user_id: Scalars['Int']['input'];
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
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
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
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
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
  /** fetch data from the table: "album" */
  album: Array<Album>;
  /** fetch aggregated fields from the table: "album" */
  album_aggregate: Album_Aggregate;
  /** fetch data from the table: "album" using primary key columns */
  album_by_pk?: Maybe<Album>;
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch aggregated fields from the table: "image" */
  image_aggregate: Image_Aggregate;
  /** fetch data from the table: "image" using primary key columns */
  image_by_pk?: Maybe<Image>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
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


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  user_id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "album" */
  album: Array<Album>;
  /** fetch aggregated fields from the table: "album" */
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
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
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


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  user_id: Scalars['Int']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
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

/** 사용자 */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  albums: Array<Album>;
  /** An aggregate relationship */
  albums_aggregate: Album_Aggregate;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  user_id: Scalars['Int']['output'];
};


/** 사용자 */
export type UserAlbumsArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


/** 사용자 */
export type UserAlbums_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  albums?: InputMaybe<Album_Bool_Exp>;
  albums_aggregate?: InputMaybe<Album_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  albums?: InputMaybe<Album_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  albums_aggregate?: InputMaybe<Album_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  user_id: Scalars['Int']['input'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
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


export type AlbumQuery = { __typename?: 'query_root', album_by_pk?: { __typename?: 'album', album_id: number, created_at: any, is_shared: boolean, title: string, subtitle?: string | null, main_image?: { __typename?: 'image', image_id: number, path: string, size?: number | null, width?: number | null, height?: number | null } | null } | null };

export type MyAlbumsQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MyAlbumsQuery = { __typename?: 'query_root', album: Array<{ __typename?: 'album', album_id: number, created_at: any, is_shared: boolean, title: string, subtitle?: string | null, main_image?: { __typename?: 'image', image_id: number, path: string, size?: number | null, width?: number | null, height?: number | null } | null }> };

export type GetImagesQueryVariables = Exact<{
  album_id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetImagesQuery = { __typename?: 'query_root', image: Array<{ __typename?: 'image', image_id: number, path: string, size?: number | null, width?: number | null, height?: number | null, created_at: any }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', user_id: number, name: string, email: string }> };

export type InsertAlbumMutationVariables = Exact<{
  object: Album_Insert_Input;
}>;


export type InsertAlbumMutation = { __typename?: 'mutation_root', insert_album_one?: { __typename?: 'album', album_id: number, created_at: any } | null };

export type InsertImageMutationVariables = Exact<{
  objects: Array<Image_Insert_Input> | Image_Insert_Input;
}>;


export type InsertImageMutation = { __typename?: 'mutation_root', insert_image?: { __typename?: 'image_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'image', album_id: number, created_at: any, image_id: number, path: string }> } | null };

export type UpdateAlbumMutationVariables = Exact<{
  album_id: Scalars['Int']['input'];
  _set: Album_Set_Input;
}>;


export type UpdateAlbumMutation = { __typename?: 'mutation_root', update_album_by_pk?: { __typename?: 'album', album_id: number } | null };


export const DeleteAlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAlbum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_album_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}}]}}]}}]} as unknown as DocumentNode<DeleteAlbumMutation, DeleteAlbumMutationVariables>;
export const DeleteImageByAlbumIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteImageByAlbumId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"album_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteImageByAlbumIdMutation, DeleteImageByAlbumIdMutationVariables>;
export const DeleteImageByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteImageById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_image_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<DeleteImageByIdMutation, DeleteImageByIdMutationVariables>;
export const AlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"album"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_shared"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"main_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<AlbumQuery, AlbumQueryVariables>;
export const MyAlbumsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myAlbums"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_shared"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"main_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<MyAlbumsQuery, MyAlbumsQueryVariables>;
export const GetImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"album_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<GetImagesQuery, GetImagesQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const InsertAlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertAlbum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"album_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_album_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<InsertAlbumMutation, InsertAlbumMutationVariables>;
export const InsertImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"image_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"image_id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<InsertImageMutation, InsertImageMutationVariables>;
export const UpdateAlbumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAlbum"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"album_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_album_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"album_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"album_id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}}]}}]}}]} as unknown as DocumentNode<UpdateAlbumMutation, UpdateAlbumMutationVariables>;
