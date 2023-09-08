import styled from '@emotion/styled';
import ImageList from '@/Components/ImageList';
import NavBar from '@/Components/NavBar';
import { Image } from '@/gql/graphql';
import { useRouter } from 'next/router';
import { trpcReactClient } from '@/lib/trpc-client';

import { Suspense, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import Spinner from '@/Components/utils/spinner';

const OneAlbum = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: albumDetails, isLoading: isAlbumDetailLoading } = trpcReactClient.getAlbum.useQuery(Number(id), {
    suspense: true,
  });

  const userInfo = useSession();

  const newImages = useMemo(() => {
    return albumDetails?.images?.map((image: Image) => ({
      original: image.path,
      src: image.path,
      imageId: image.image_id,
      width: image.width,
      height: image.height,
    }));
  }, [albumDetails?.images]);

  const albumData = {
    title: albumDetails?.title || '',
    description: albumDetails?.subtitle || '',
    albumId: albumDetails?.album_id || 0,
    album: newImages || [],
    icon: albumDetails?.icon || '',
    backgroundImage: albumDetails?.background || '',
    createdby: albumDetails?.created_by || '',
  };

  if (albumDetails === null && !isAlbumDetailLoading) {
    router.replace('/');
  }

  return (
    <AlbumContainer>
      <NavBar leftArrow={true} />
      <ImageListContainer>
        <Suspense fallback={<Spinner />}>
          <ImageList
            data={albumData}
            isLoading={isAlbumDetailLoading}
            isAuthenticatedUser={albumData.createdby === userInfo?.data?.user?.id}
          />
        </Suspense>
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
