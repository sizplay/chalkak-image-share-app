import { trpcClient } from '@/lib/trpc-client';

const TrcpClientSample = () => {
  return (
    <>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.getAlbumList.query(1);
          console.log(data1);
        }}
      >
        앨범 리스트
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.getAlbum.query(1);
          console.log(data1);
        }}
      >
        앨범 상세 조회
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.insertAlbum.mutate({ title: '0710테스트', subtitle: '부제목', userId: 1 });
          console.log(data1);
        }}
      >
        앨범 추가
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.updateAlbum.mutate({
            albumId: 3,
            title: '33333',
            subtitle: '444444',
            isShared: true,
          });
          console.log(data1);
        }}
      >
        앨범 변경
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.deleteAlbum.mutate(3);
          console.log(data1);
        }}
      >
        앨범 삭제
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.getAlbumImageList.query(1);
          console.log(data1);
        }}
      >
        앨범 이미지 리스트
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.insertImages.mutate([
            { album_id: 4, path: '/test/is/test', size: 102400, width: 100, height: 100 },
          ]);
          console.log(data1);
        }}
      >
        이미지 추가
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.deleteImage.mutate(13);
          console.log(data1);
        }}
      >
        이미지 삭제
      </button>
      <button
        type="button"
        onClick={async () => {
          const data1 = await trpcClient.deleteAllAlbumImages.mutate(4);
          console.log(data1);
        }}
      >
        앨범 이미지 삭제
      </button>
    </>
  );
};

export default TrcpClientSample;
