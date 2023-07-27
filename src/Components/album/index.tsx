import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import HeadComponent from '@/Components/HeadComponent';
import { trpcReactClient } from '@/lib/trpc-client';
import { Album } from '@/gql/graphql';
import { useEffect, useState } from 'react';
import { Image } from 'lucide-react';

const AlbumComponent = () => {
  const router = useRouter();

  const { data } = trpcReactClient.getAlbumList.useQuery();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, []);

  const onClickToggle = (id: number) => {
    router.push({
      pathname: `/album/${id}`,
    });
  };

  return (
    <Container>
      <HeadComponent />
      <StyledAlbum width={width}>
        <AlbumList>
          {data?.map((item: Album) => {
            return (
              <AlbumItem key={item.created_at} width={width}>
                <button type="button" onClick={() => onClickToggle(item.album_id)}>
                  {item.images[0].path && <img src={item.images[0].path} alt="background" />}
                  <p>{item.title}</p>
                  <p>{item.created_at.split('T')[0]}</p>
                </button>
              </AlbumItem>
            );
          })}
        </AlbumList>
      </StyledAlbum>
    </Container>
  );
};

export default AlbumComponent;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const StyledAlbum = styled.main<{ width: number }>`
  width: ${({ width }) => (width < 768 ? width : 768)}px;
  height: 100%;
  color: #fff;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AlbumList = styled.section`
  margin: 16px 16px 0;
  gap: 16px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
`;

const AlbumItem = styled.div<{ width: number }>`
  background-color: #fff;
  word-break: keep-all;
  width: ${({ width }) => (width < 768 ? width / 2 - 23 : 360)}px;

  button {
    width: 100%;
    height: 100%;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    text-align: left;
  }

  button:active {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 178px;
  }

  p {
    color: #001c30;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 4px;

    &:first-of-type {
      font-weight: bold;
      font-size: 16px;
      margin-top: 8px;
    }
  }
`;
