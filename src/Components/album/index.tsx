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
    <>
      <HeadComponent />
      <StyledAlbum>
        <AlbumList>
          {data?.map((item: Album) => {
            return (
              <button key={item.created_at} type="button" onClick={() => onClickToggle(item.album_id)}>
                <AlbumItem width={width}>
                  {item.images[0].path && <img src={item.images[0].path} alt="background" />}
                  <p>{item.title}</p>
                  <p>{item.created_at.split('T')[0]}</p>
                </AlbumItem>
              </button>
            );
          })}
        </AlbumList>
      </StyledAlbum>
    </>
  );
};

export default AlbumComponent;

const StyledAlbum = styled.main`
  width: 100%;
  height: 100%;
  color: #fff;
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

const AlbumItem = styled.div<{ width: number }>`
  background-color: #fff;
  word-break: keep-all;
  width: calc((${({ width }) => width}px - 32px) / 2 - 8px);

  img {
    width: 100%;
    /* height: 100%; */
    height: 178px;
    object-fit: cover;
    opacity: 0.8;
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
