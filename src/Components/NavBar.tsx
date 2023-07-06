import styled from '@emotion/styled';
import LeftArrow from '@public/icon/left-arrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

interface NavBarProps {
  leftArrow?: boolean;
}

const NavBar = ({ leftArrow }: NavBarProps) => {
  const router = useRouter();
  return (
    <StyledNavigationBar>
      {leftArrow ? (
        <LeftArrowButton type="button" onClick={() => router.push('/')}>
          <LeftArrow width={24} height={24} fill="#001C30" />
        </LeftArrowButton>
      ) : (
        <div />
      )}
      <RightSideWrapper>
        <button type="button">
          <Image width={30} height={30} src="/icon/user-info-icon.png" alt="user_info_icon" />
        </button>
        <button type="button" onClick={() => signOut({ callbackUrl: '/login' })}>
          <Image width={25} height={25} src="/icon/logout.png" alt="logout" />
        </button>
      </RightSideWrapper>
    </StyledNavigationBar>
  );
};

export default NavBar;

const StyledNavigationBar = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #176b87;
  height: 50px;

  .user-info {
    margin: 0 10px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  button:first-of-type {
    margin-right: 10px;
  }
`;

const LeftArrowButton = styled.button`
  margin-left: 16px;
`;

const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;
