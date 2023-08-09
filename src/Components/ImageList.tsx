/* eslint-disable no-alert */
import { trpcReactClient } from '@/lib/trpc-client';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import debounce from 'lodash/debounce';
import axios from 'axios';
import AlbumHeader from './AlbumHeader';

interface ImageListProps {
  data: ImageDataProps;
  isLoading: boolean;
  isAuthenticatedUser: boolean;
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
  const { data, isLoading, isAuthenticatedUser } = props;
  const { icon, backgroundImage } = data;
  const [index, setIndex] = useState(-1);
  const images = useMemo(() => {
    return data?.album || [];
  }, [data?.album]);

  const originalImages = useMemo(() => {
    return images.map((image: ImagesArrayProps) => ({
      ...image,
      original: `${image.original}?format=webp`,
      src: `${image.original}?format=webp`,
    }));
  }, [images]);

  const thumbnailImages = useMemo(() => {
    return images.map((image: ImagesArrayProps) => ({
      ...image,
      src: `${image.src}?format=webp&width=500`,
      original: `${image.src}?format=webp&width=500`,
    }));
  }, [images]);

  const { refetch } = trpcReactClient.getAlbumList.useQuery();
  const deleteAlbumMutation = trpcReactClient.deleteAlbum.useMutation({
    onSuccess: () => {
      refetch();
    },
  });
  const deleteImagesMutation = trpcReactClient.deleteAllAlbumImages.useMutation({
    onSuccess: () => {
      images.forEach(async (image: ImagesArrayProps) => {
        await axios.get(`${image.src}?dispose=1`);
      });
    },
  });

  const currentImage = originalImages[index];
  const nextIndex = (index + 1) % originalImages.length;
  const nextImage = originalImages[nextIndex] || currentImage;
  const prevIndex = (index + originalImages.length - 1) % originalImages.length;
  const prevImage = originalImages[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const handleEditAlbum = () => {
    router.push(`/edit/${router.query.id}`);
  };

  const handleDeleteAlbum = async () => {
    try {
      const keys = [];
      data.album.forEach((image: ImagesArrayProps) => {
        keys.push({ Key: `${image.src.split('.run/')[1]}` });
      });
      if (data?.backgroundImage) {
        keys.push({ Key: `${data.backgroundImage.split('.run/')[1]}` });
      }
      await axios
        .post('/api/delete', {
          data: { keys },
        })
        .then(async () => {
          data.album.forEach(async (image: ImagesArrayProps) => {
            await axios.get(`${image.src}?dispose=1`);
          });
          await axios.get(`${data?.backgroundImage}?dispose=1`);
        });

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

  const handleShare = () => {
    const url = `${window.location.origin}/album/${router.query.id}`;
    if (!window.navigator.share) {
      window.navigator.clipboard.writeText(url);
      alert('앨범 주소가 복사되었습니다.');
    } else {
      window.navigator.share({
        title: data?.title,
        text: data?.description,
        url,
      });
    }
  };

  return (
    <ImageListContainer>
      {!isLoading && (
        <>
          <AlbumHeader icon={icon || ''} backgroundImage={backgroundImage || ''} isNomalPage={true} />
          <TitleWrapper>
            <div>
              <h1>{data?.title}</h1>
              <p>{data?.description}</p>
            </div>
            {isAuthenticatedUser && data && (
              <div className="button-wrapper">
                <button type="button" onClick={handleShare}>
                  공유 하기
                </button>
                <button type="button" onClick={handleEditAlbum}>
                  앨범 수정
                </button>
                <button type="button" onClick={debounce(handleDeleteAlbum)}>
                  앨범 삭제
                </button>
              </div>
            )}
            {!isAuthenticatedUser && data && (
              <div className="button-wrapper">
                <button type="button" onClick={handleShare}>
                  공유 하기
                </button>
              </div>
            )}
          </TitleWrapper>
          <Gallery images={thumbnailImages} onClick={handleClick} enableImageSelection={false} />
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
    </ImageListContainer>
  );
};

export default ImageList;

const ImageListContainer = styled.article`
  width: 100%;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 16px 20px;

  div:first-of-type {
    max-width: 80%;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #001c30;
    word-break: break-all;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #001c30;
    word-break: break-all;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
  }

  button {
    background: #755bb4;
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
