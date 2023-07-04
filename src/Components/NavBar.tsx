import styled from '@emotion/styled';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const NavBar = () => {
  return (
    <StyledNavigationBar>
      <div className="user-info">
        <button type="button">
          <Image width={30} height={30} src="/icon/user-info-icon.png" alt="user_info_icon" />
        </button>
        <button type="button" onClick={() => signOut({ callbackUrl: '/login' })}>
          <Image width={25} height={25} src="/icon/logout.png" alt="logout" />
        </button>
      </div>
    </StyledNavigationBar>
  );
};

export default NavBar;

const StyledNavigationBar = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(to right, purple, pink);
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

  button:first-child {
    margin-right: 10px;
  }
`;
