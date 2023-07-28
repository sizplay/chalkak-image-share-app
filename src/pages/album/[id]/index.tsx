import styled from '@emotion/styled';
import ImageList from '@/Components/ImageList';
import NavBar from '@/Components/NavBar';
import { Image } from '@/gql/graphql';
import { useRouter } from 'next/router';
import { trpcReactClient } from '@/lib/trpc-client';

import { useMemo } from 'react';
import { useSession } from 'next-auth/react';

const OneAlbum = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: albumDetail, isLoading: isAlbumDetailLoading } = trpcReactClient.getAlbum.useQuery(Number(id));

  const userInfo = useSession();

  const newImages = useMemo(() => {
    return albumDetail?.images?.map((image: Image) => ({
      original: image.path,
      src: image.path,
      imageId: image.image_id,
      width: image.width,
      height: image.height,
    }));
  }, [albumDetail?.images]);

  const albumData = {
    title: albumDetail?.title || '',
    description: albumDetail?.subtitle || '',
    albumId: albumDetail?.album_id || 0,
    album: newImages || [],
    icon: albumDetail?.icon || '',
    backgroundImage: albumDetail?.background || '',
    createdby: albumDetail?.created_by || '',
  };

  if (albumDetail === null && !isAlbumDetailLoading) {
    router.replace('/');
  }

  return (
    <AlbumContainer>
      <NavBar leftArrow={true} />
      <ImageListContainer>
        <ImageList
          data={albumData}
          isLoading={isAlbumDetailLoading}
          isAuthenticatedUser={albumData.createdby === userInfo?.data?.user?.id}
        />
      </ImageListContainer>
    </AlbumContainer>
  );
};

export default OneAlbum;

const AlbumContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const ImageListContainer = styled.section`
  margin-top: 50px;
`;
