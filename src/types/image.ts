export interface getAlbumImageListProps {
  __typename: string;
  image_id: number;
  path: string;
  size: number;
  width: number;
  height: number;
  created_at: string;
}

export type ctxProps = {
  [key: string]: any;
  req?: any;
};

export interface albumListProps {
  __typename: string;
  album_id: number;
  created_at: string;
  title: string;
  subtitle: string;
  icon: string;
  background: string;
  images: getAlbumImageListProps[];
}
