import styled from '@emotion/styled';
import HeadComponent from '@/Components/HeadComponent';
import NavBar from '@/Components/NavBar';
import Album from '@/Components/album';
import { useRouter } from 'next/router';
import Toggle from '@/Components/utils/toggle';
import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const Home = () => {
  const router = useRouter();
  const [isEditToggleOn, setIsEditToggleOn] = useState(false);
  const [isDeleteToggleOn, setIsDeleteToggleOn] = useState(false);

  const handleClick = () => {
    router.push('/album/create');
  };

  const handleEditToggle = (isToggleOn: boolean) => {
    if (isDeleteToggleOn) setIsDeleteToggleOn(false);
    setIsEditToggleOn(!isToggleOn);
  };

  const handleDeleteToggle = (isToggleOn: boolean) => {
    if (isEditToggleOn) setIsEditToggleOn(false);
    setIsDeleteToggleOn(!isToggleOn);
  };

  return (
    <>
      <HeadComponent />
      <EmptySpace />
      <NavBar />
      <HomeContainer>
        <Album isEditToggleOn={isEditToggleOn} isDeleteToggleOn={isDeleteToggleOn} />
        <FloatingButtonWrapper>
          <FloatingAddButton>
            <Input onClick={handleClick} />
            <PlusCircle color="#001C30" size={48} />
          </FloatingAddButton>
          <FloatingEeitToggleButton>
            <Toggle handleToggleOn={handleEditToggle} isToggleOn={isEditToggleOn} toggleName="수정" />
          </FloatingEeitToggleButton>
          <FloatingDeleteToggleButton>
            <Toggle handleToggleOn={handleDeleteToggle} isToggleOn={isDeleteToggleOn} toggleName="삭제" />
          </FloatingDeleteToggleButton>
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

const FloatingEeitToggleButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 110px;
`;

const FloatingDeleteToggleButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 200px;
`;
