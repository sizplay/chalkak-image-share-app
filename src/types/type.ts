import { Styles } from 'react-modal';

/* eslint-disable @typescript-eslint/no-explicit-any */
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
  upload_path: string;
  images: getAlbumImageListProps[];
}

export const reactModalStyles: Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    border: 'none',
    background: 'none',
    padding: 0,
    margin: 0,
  },
};
