import styled from '@emotion/styled';
import ImageList from '@/Components/ImageList';
import NavBar from '@/Components/NavBar';
// import {  CustomImage } from '@/Components/images';
import { useRouter } from 'next/router';
import { trpcReactClient } from '@/lib/trpc-client';

const OneAlbum = () => {
  const router = useRouter();

  const { id } = router.query;

  const albumDetail = trpcReactClient.getAlbum.useQuery(Number(id));
  const images = trpcReactClient.getAlbumImageList.useQuery(Number(id));

  const newImages = images.data?.map((image) => {
    return {
      original: image.path,
      src: image.path,
      width: image.width,
      height: image.height,
      imageId: image.image_id,
    };
  });

  const albumData = {
    title: albumDetail.data?.title || '',
    description: albumDetail.data?.subtitle || '',
    albumId: albumDetail.data?.album_id || 0,
    album: newImages || [],
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
  margin-top: 70px;
`;
