import React from "react";
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../../constants/authURL";
import Logo from "../Common/Logo/Logo";
import { LoginAnchor, LoginAnchorBox, LoginLayout, LoginText, LoginTextBox } from "./Login.styles";

const Login = () => {
  return (
    <LoginLayout>
      <Logo />
      <LoginAnchorBox>
        <LoginAnchor authType="kakao" bgColor="#FEE500" href={KAKAO_AUTH_URL}>
          카카오 로그인
        </LoginAnchor>
        <LoginAnchor authType="naver" bgColor="#03C75A" href={NAVER_AUTH_URL}>
          네이버 로그인
        </LoginAnchor>
        <LoginAnchor authType="google" bgColor="#FFFFFF" href={GOOGLE_AUTH_URL}>
          구글 로그인
        </LoginAnchor>
      </LoginAnchorBox>
      <LoginTextBox>
        <LoginText>SNS계정으로 간편하게 시작하기</LoginText>
      </LoginTextBox>
    </LoginLayout>
  );
};

export default Login;
