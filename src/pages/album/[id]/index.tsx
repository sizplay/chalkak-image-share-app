import styled from '@emotion/styled';
import ImageList from '@/Components/ImageList';
import NavBar from '@/Components/NavBar';
// import {  CustomImage } from '@/Components/images';
import { useRouter } from 'next/router';
import { trpcReactClient } from '@/lib/trpc-client';

import { useMemo } from 'react';

const OneAlbum = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: albumDetail } = trpcReactClient.getAlbum.useQuery(Number(id));
  const { data: images } = trpcReactClient.getAlbumImageList.useQuery(Number(id));

  const newImages = useMemo(() => {
    return images?.map((image) => ({
      original: image.path,
      src: image.path,
      width: image.width,
      height: image.height,
      imageId: image.image_id,
    }));
  }, [images]);

  const albumData = {
    title: albumDetail?.title || '',
    description: albumDetail?.subtitle || '',
    albumId: albumDetail?.album_id || 0,
    album: newImages || [],
    icon: albumDetail?.icon || '',
    backgroundImage: albumDetail?.background || '',
  };

  return (
    <>
      <NavBar leftArrow={true} isScrolledOn={true} />
      <ImageListContainer>
        <ImageList data={albumData} />
      </ImageListContainer>
    </>
  );
};

export default OneAlbum;

const ImageListContainer = styled.main`
  margin-top: 50px;
`;
