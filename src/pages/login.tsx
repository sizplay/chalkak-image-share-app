import styled from '@emotion/styled';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const login = () => {
  return (
    <LoginContainer>
      <Image
        src="/icon/kakao_login_medium_wide.png"
        onClick={() => signIn('kakao')}
        alt="kakao login"
        width={300}
        height={45}
      />
    </LoginContainer>
  );
};

export default login;

const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
