/* eslint-disable no-alert */
import { trpcReactClient } from '@/lib/trpc-client';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useAuth } from '@/lib/auth/auth-provider';
import debounce from 'lodash/debounce';
import AlbumHeader from './AlbumHeader';

interface ImageListProps {
  data: ImageDataProps;
  isLoading: boolean;
}

interface ImagesArrayProps {
  original: string;
  src: string;
  width: number;
  height: number;
  imageId: number;
}

interface ImageDataProps {
  title: string;
  description: string;
  album: ImagesArrayProps[];
  icon?: string;
  backgroundImage?: string;
}

const ImageList = (props: ImageListProps) => {
  const router = useRouter();
  const { data, isLoading } = props;
  const { icon, backgroundImage } = data;
  const [index, setIndex] = useState(-1);
  const images = data?.album || [];

  const userInfo = useAuth();

  const { refetch } = trpcReactClient.getAlbumList.useQuery();
  const deleteAlbumMutation = trpcReactClient.deleteAlbum.useMutation({
    onSuccess: () => {
      refetch();
    },
  });
  const deleteImagesMutation = trpcReactClient.deleteAllAlbumImages.useMutation();

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const handleEditAlbum = () => {
    router.push(`/edit/${router.query.id}`);
  };

  const handleDeleteAlbum = async () => {
    try {
      Promise.all([
        deleteAlbumMutation.mutate(Number(router.query.id)),
        deleteImagesMutation.mutate(Number(router.query.id)),
      ]).then(() => {
        alert('앨범을 삭제했습니다.');
        router.push('/');
      });
    } catch (error) {
      console.log(error);
      alert('앨범 삭제에 실패했습니다.');
    }
  };

  return (
    <>
      {!isLoading && (
        <>
          <AlbumHeader icon={icon || ''} backgroundImage={backgroundImage || ''} isNomalPage={true} />
          <TitleWrapper>
            <div>
              <h1>{data?.title}</h1>
              <p>{data?.description}</p>
            </div>
            {userInfo?.initialized && data && (
              <div className="button-wrapper">
                <button type="button" onClick={handleEditAlbum}>
                  앨범 수정
                </button>
                <button type="button" onClick={debounce(handleDeleteAlbum)}>
                  앨범 삭제
                </button>
              </div>
            )}
          </TitleWrapper>
          <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
          {!!currentImage && (
            <Lightbox
              mainSrc={currentImage.original}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </>
      )}
    </>
  );
};

export default ImageList;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 16px 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #001c30;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #001c30;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
  }

  button {
    background: #001c30;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    text-align: right;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
  }

  button:active {
    opacity: 0.8;
  }
`;
