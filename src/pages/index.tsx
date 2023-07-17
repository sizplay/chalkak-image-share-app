import styled from '@emotion/styled';
import HeadComponent from '@/Components/HeadComponent';
import NavBar from '@/Components/NavBar';
import Album from '@/Components/album';
import { useRouter } from 'next/router';
import { PlusCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useAuth } from '@/lib/auth/auth-provider';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    router.push('/create');
  };

  const data = useAuth();

  return (
    <>
      <HeadComponent />
      <NavBar />
      <HomeContainer>
        <Album />
        <FloatingButtonWrapper>
          {data?.initialized && (
            <FloatingAddButton>
              <Input onClick={handleClick} />
              <PlusCircle color="#001C30" size={50} />
            </FloatingAddButton>
          )}
        </FloatingButtonWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.main`
  height: 100vh;
  width: 100%;
  background: #fff;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const FloatingAddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background: #fff;

  &:active {
    opacity: 0.8;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: fixed;
  bottom: 25px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1;
`;

const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  z-index: 1;
`;
