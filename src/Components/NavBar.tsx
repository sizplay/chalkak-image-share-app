import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { LogOut, MoveLeft } from 'lucide-react';

interface NavBarProps {
  leftArrow?: boolean;
  isScrolledOn?: boolean;
}

const NavBar = ({ leftArrow, isScrolledOn = false }: NavBarProps) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolledOn && window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolledOn]);

  interface isNavBarVisibleProps {
    isScrolled: boolean;
    leftArrow?: boolean;
  }

  const isNavBarVisible = ({ isScrolled, leftArrow = false }: isNavBarVisibleProps) => {
    if (leftArrow && isScrolled) {
      return false;
    }

    return true;
  };

  return (
    <>
      {isNavBarVisible({ isScrolled, leftArrow }) && (
        <StyledNavigationBar>
          {leftArrow ? (
            <LeftSideWrapper>
              <button type="button" onClick={() => router.push('/')}>
                <MoveLeft size={24} color="#FFF" />
              </button>
            </LeftSideWrapper>
          ) : (
            <div />
          )}
          <RightSideWrapper>
            <button type="button" onClick={() => signOut({ callbackUrl: '/login' })}>
              <LogOut color="#FFF" size={24} />
            </button>
          </RightSideWrapper>
        </StyledNavigationBar>
      )}
    </>
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
  background: #001c30;
  height: 50px;
  z-index: 100;

  button {
    background: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

const LeftSideWrapper = styled.div`
  margin-left: 16px;
`;

const RightSideWrapper = styled.div`
  margin-right: 16px;
`;
