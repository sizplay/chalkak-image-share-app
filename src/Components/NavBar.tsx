import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { LogOut, MoveLeft, UserCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth/auth-provider';

interface NavBarProps {
  leftArrow?: boolean;
}

const NavBar = ({ leftArrow }: NavBarProps) => {
  const router = useRouter();
  const userInfo = useAuth();

  return (
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
