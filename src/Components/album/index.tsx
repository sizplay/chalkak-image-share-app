import styled from '@emotion/styled';
import { Image } from 'lucide-react';
import { useRouter } from 'next/router';
import HeadComponent from '@/Components/HeadComponent';
import { trpcReactClient } from '@/lib/trpc-client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { User, Album } from '@/gql/graphql';

const Album = () => {
  const [userId, setUserId] = useState(0);
  const router = useRouter();

  const { data: sessionData } = useSession();
  const { data: users } = trpcReactClient.users.useQuery();

  useEffect(() => {
    const user = users?.find((user: User) => user.email === sessionData?.user?.email);
    setUserId(user?.user_id || 0);
  }, [users, sessionData]);

  const { data } = trpcReactClient.getAlbumList.useQuery(userId);

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
                <AlbumItem>
                  <AlbumImageWrapper>
                    <Image size={24} color="#001c30" />
                  </AlbumImageWrapper>
                  <p>{item.title}</p>
                </AlbumItem>
              </button>
            );
          })}
        </AlbumList>
      </StyledAlbum>
    </>
  );
};

export default Album;

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

const AlbumItem = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  word-break: keep-all;
  width: 170px;
  height: 56px;
  border-radius: 6px;
  padding: 13px;
  gap: 10px;
  border: 2.5px solid #001c30;
  border-radius: 16px;

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
