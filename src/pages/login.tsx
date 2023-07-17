import styled from '@emotion/styled';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
// import TrcpClientSample from '@/Components/TrcpClientSample';

const login = () => {
  return (
    <LoginContainer>
      <TextWrapper>
        <h1>Grid Image Share App</h1>
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
      {/* <TrcpClientSample /> */}
    </LoginContainer>
  );
};

export default login;

const LoginContainer = styled.section`
  background: #001c30;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  h1 {
    color: #fff;
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
