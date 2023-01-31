import React from "react";
import Logo from "../Common/Logo/Logo";
import { LoginButton, LoginButtonBox, LoginLayout, LoginText, LoginTextBox } from "./Login.styles";

const Login = () => {
  return (
    <LoginLayout>
      <Logo />
      <LoginButtonBox>
        <LoginButton type="kakao" bgColor="#FEE500">
          카카오 로그인
        </LoginButton>
        <LoginButton type="naver" bgColor="#03C75A">
          네이버 로그인
        </LoginButton>
        <LoginButton type="google" bgColor="#FFFFFF">
          구글 로그인
        </LoginButton>
      </LoginButtonBox>
      <LoginTextBox>
        <LoginText>SNS계정으로 간편하게 시작하기</LoginText>
      </LoginTextBox>
    </LoginLayout>
  );
};

export default Login;
