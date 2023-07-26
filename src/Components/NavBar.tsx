import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { LogOut, MoveLeft, UserCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth/auth-provider';

interface NavBarProps {
  leftArrow?: boolean;
  isScrolledOn?: boolean;
}

const NavBar = ({ leftArrow, isScrolledOn = false }: NavBarProps) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const userInfo = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolledOn && window.scrollY > 50) {
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
          {userInfo?.initialized && leftArrow ? (
            <LeftSideWrapper>
              <button type="button" onClick={() => router.back()}>
                <MoveLeft size={24} color="#FFF" />
              </button>
            </LeftSideWrapper>
          ) : (
            <LeftSideWrapper>
              <div />
            </LeftSideWrapper>
          )}
          <CenterWrapper>
            <button type="button" onClick={() => router.push('/')}>
              <p>Grid Image Share App</p>
            </button>
          </CenterWrapper>
          <RightSideWrapper>
            <button type="button" onClick={() => signOut({ callbackUrl: '/login' })}>
              {userInfo?.initialized ? <LogOut color="#FFF" size={24} /> : <UserCircle color="#FFF" size={24} />}
            </button>
          </RightSideWrapper>
        </StyledNavigationBar>
      )}
    </>
  );
};

export default NavBar;

const StyledNavigationBar = styled.article`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #001c30;
  height: 50px;
  z-index: 200;
  max-width: 768px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

const LeftSideWrapper = styled.div`
  margin-left: 16px;

  div {
    width: 24px;
  }
`;

const RightSideWrapper = styled.div`
  margin-right: 16px;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;

  button {
    background: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;
