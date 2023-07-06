import styled from '@emotion/styled';
import PlusCircle from '@public/icon/plus-circle.svg';
import HeadComponent from '@/Components/HeadComponent';
import NavBar from '@/Components/NavBar';
import Album from '@/Components/album';

const Home = () => {
  return (
    <>
      <HeadComponent />
      <EmptySpace />
      <NavBar />
      <HomeContainer>
        <Album />
        <FloatingButtonWrapper>
          <FloatingButton>
            <PlusCircle width={50} height={50} />
          </FloatingButton>
        </FloatingButtonWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.main`
  padding-top: 20px;
  background: #dafffb;
  height: 100vh;
`;

const EmptySpace = styled.div`
  height: 50px;
`;

const FloatingButtonWrapper = styled.div`
  position: relative;
`;

const FloatingButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background: #dafffb;

  &:active {
    opacity: 0.8;
  }
`;
