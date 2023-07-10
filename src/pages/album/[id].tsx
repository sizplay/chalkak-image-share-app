import styled from '@emotion/styled';
import ImageList from '@/Components/ImageList';
import NavBar from '@/Components/NavBar';
import { images, CustomImage } from '@/Components/images';

interface ImageDataProps {
  title: string;
  description: string;
  album: CustomImage[];
}

const albumData: ImageDataProps = {
  title: '가족 이야기',
  description: '가족들과 함께한 추억들을 모아놓은 앨범입니다.',
  album: images,
};

const OneAlbum = () => {
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
