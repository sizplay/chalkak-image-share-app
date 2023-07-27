import styled from '@emotion/styled';
import HeadComponent from '@/Components/HeadComponent';
import NavBar from '@/Components/NavBar';
import Album from '@/Components/album';
import { useRouter } from 'next/router';
import { PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth/auth-provider';

const MAX_WIDTH = 768;

interface FloatingButtonWrapperProps {
  width: number;
}

const Home = () => {
  const router = useRouter();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, []);

  const handleClick = () => {
    router.push('/create');
  };

  const data = useAuth();

  return (
    <MobileContainer>
      <HeadComponent />
      <NavBar />
      <HomeContainer>
        <Album />
        <FloatingButtonWrapper width={width}>
          {data?.initialized && (
            <FloatingAddButton>
              <Input onClick={handleClick} />
              <PlusCircle color="#001C30" size={50} />
            </FloatingAddButton>
          )}
        </FloatingButtonWrapper>
      </HomeContainer>
    </MobileContainer>
  );
};

export default Home;

const MobileContainer = styled.div`
  height: 100vh;
  width: 768px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HomeContainer = styled.main`
  height: 100%;
  width: 100%;
  background: #fff;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FloatingButtonWrapper = styled.div<FloatingButtonWrapperProps>`
  position: fixed;
  bottom: 20px;
  ${({ width }) => (width > MAX_WIDTH ? 'right: calc((100% - 768px) / 2 + 20px)' : 'right: 20px')};
  border-radius: 50%;
  z-index: 1;
  width: 50px;
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
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1;
`;
