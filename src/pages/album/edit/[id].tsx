// import { useRouter } from 'next/router';
import HeadComponent from '@/Components/HeadComponent';
import styled from '@emotion/styled';
import EditAlbum from '@/Components/album/editAlbum';

const EditAlbumPage = () => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <HeadComponent />
      <EditAlbumContainer>
        <EditAlbum albumData={albumData} />
      </EditAlbumContainer>
    </>
  );
};

export default EditAlbumPage;

const EditAlbumContainer = styled.main``;

const albumData = {
  title: '가족 이야기',
  description: '가족들과 함께한 추억들을 모아놓은 앨범입니다.',
  // images: [
  //   {
  //     src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
  //     lastModified: 1627777777777,
  //     name: 'image1',
  //     size: 1000,
  //     type: 'image/png',
  //     webkitRelativePath: '',
  //   },
  //   {
  //     src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
  //     lastModified: 1627777777777,
  //     name: 'image1',
  //     size: 1000,
  //     type: 'image/png',
  //     webkitRelativePath: '',
  //   },
  //   {
  //     src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
  //     lastModified: 1627777777777,
  //     name: 'image1',
  //     size: 1000,
  //     type: 'image/png',
  //     webkitRelativePath: '',
  //   },
  // ],
};
