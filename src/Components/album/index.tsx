import styled from '@emotion/styled';
import AlbumImage from '@public/icon/album-image.svg';
import { useRouter } from 'next/router';
import HeadComponent from '@/Components/HeadComponent';

const albumData = [
  {
    id: 1,
    title: '가족 이야기',
    description: '가족들과 함께한 추억들을 모아놓은 앨범입니다.',
  },
  {
    id: 2,
    title: '여행 이야기',
    description: '여행을 다녀온 추억들을 모아놓은 앨범입니다.',
  },
  {
    id: 3,
    title: '친구 이야기',
    description: '친구들과 함께한 추억들을 모아놓은 앨범입니다.',
  },
  {
    id: 4,
    title: '연인 이야기',
    description: '연인과 함께한 추억들을 모아놓은 앨범입니다.',
  },
  {
    id: 5,
    title: '졸업 이야기가 길게 나오면 어떻게 될까요?',
    description: '졸업을 하고 남은 추억들을 모아놓은 앨범입니다.',
  },
  {
    id: 6,
    title: '기타 이야기',
    description: '기타 추억들을 모아놓은 앨범입니다.',
  },
];

interface Album {
  id: number;
  title: string;
}

const Album: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <HeadComponent />
      <StyledAlbum>
        <AlbumList>
          {albumData.map((item: Album) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                router.push({
                  pathname: `/album/${item.id}`,
                });
              }}
            >
              <AlbumItem>
                <AlbumImageWrapper>
                  <AlbumImage width={30} height={30} />
                </AlbumImageWrapper>
                <p>{item.title}</p>
              </AlbumItem>
            </button>
          ))}
        </AlbumList>
      </StyledAlbum>
    </>
  );
};

export default Album;

const StyledAlbum = styled.main`
  width: 100%;
  height: 90vh;
  color: #dafffb;
`;

const AlbumList = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 16px;
  gap: 16px;
  margin-top: 16px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    text-align: left;
  }

  button:active {
    opacity: 0.8;
  }
`;

const AlbumImageWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlbumItem = styled.div`
  background-color: #64ccc5;
  display: flex;
  align-items: center;
  word-break: keep-all;
  width: 170px;
  height: 50px;
  border-radius: 6px;
  padding: 10px;
  gap: 10px;

  p {
    color: #001c30;
    font-size: 14px;
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;
