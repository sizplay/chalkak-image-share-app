import styled from '@emotion/styled';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const login = () => {
  return (
    <LoginContainer>
      <TextWrapper>
        <Image src="/icon/logo-no-background.svg" alt="logo" width={200} height={100} />
      </TextWrapper>
      <ImageWrapper>
        <KakaoLogin
          src="/icon/kakao_login_medium_wide.png"
          onClick={() => signIn('kakao')}
          alt="kakao login"
          width={300}
          height={45}
        />
      </ImageWrapper>
    </LoginContainer>
  );
};

export default login;

const LoginContainer = styled.section`
  background: #755bb4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  p {
    color: #fff;
    font-size: 24px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const KakaoLogin = styled(Image)`
  display: block;
  text-align: center;
  margin: 0 auto;
  &:active {
    opacity: 0.8;
  }
`;
