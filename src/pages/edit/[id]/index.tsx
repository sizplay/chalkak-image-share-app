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

  const { data: albumDetail, refetch: albumRefetch, isLoading } = trpcReactClient.getAlbum.useQuery(Number(id));

  const newImages = useMemo(() => {
    return albumDetail?.images?.map((image: Image) => ({
      original: image.path,
      src: image.path,
      width: image.width,
      height: image.height,
      imageId: image.image_id,
    }));
  }, [albumDetail?.images]);

  const albumData = {
    title: albumDetail?.title || '',
    description: albumDetail?.subtitle || '',
    albumId: albumDetail?.album_id || 0,
    album: newImages || [],
    icon: albumDetail?.icon || '',
    backgroundImage: albumDetail?.background || '',
  };

  return <EditAlbum albumData={albumData} albumRefetch={albumRefetch} isAlbumLoading={isLoading} />;
};

export default EditAlbumPage;
