import styled from '@emotion/styled';
import HeadComponent from '@/Components/HeadComponent';
import NavBar from '@/Components/NavBar';
import Album from '@/Components/album';
import { useRouter } from 'next/router';
import { PlusCircle } from 'lucide-react';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    router.push('/album/create');
  };

  return (
    <>
      <HeadComponent />
      <EmptySpace />
      <NavBar />
      <HomeContainer>
        <Album />
        <FloatingButtonWrapper>
          <FloatingAddButton>
            <Input onClick={handleClick} />
            <PlusCircle color="#001C30" size={48} />
          </FloatingAddButton>
        </FloatingButtonWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.main`
  padding-top: 20px;
  height: 100vh;
`;

const EmptySpace = styled.div`
  height: 50px;
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
  bottom: 20px;
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
