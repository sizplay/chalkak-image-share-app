import HeadComponent from '@/Components/HeadComponent';
import styled from '@emotion/styled';
import EditAlbum from '@/Components/album/EditAlbum';
import { useRouter } from 'next/router';
import { trpcReactClient } from '@/lib/trpc-client';
import { Image } from '@/gql/graphql';
import { useMemo } from 'react';

const EditAlbumPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: albumDetail, refetch: albumRefetch } = trpcReactClient.getAlbum.useQuery(Number(id));
  const { data: images, refetch: albumImageListRefetch } = trpcReactClient.getAlbumImageList.useQuery(Number(id));

  const newImages = useMemo(() => {
    return images?.map((image: Image) => ({
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
      <HeadComponent />
      <EditAlbumContainer>
        {albumData?.title.length > 0 && (
          <EditAlbum albumData={albumData} albumImageListRefetch={albumImageListRefetch} albumRefetch={albumRefetch} />
        )}
      </EditAlbumContainer>
    </>
  );
};

export default EditAlbumPage;

const EditAlbumContainer = styled.main``;
