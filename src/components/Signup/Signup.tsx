import React from "react";
import Logo from "../Common/Logo/Logo";
import AgreeContainer from "./Agree/AgreeContainer";
import FieldContainer from "./Field/FieldContainer";
import { SignupLayout, SignupSubmit } from "./Signup.styles";

interface SignupProps {
  handleClickSignup: () => void;
}

const Signup = ({ handleClickSignup }: SignupProps) => {
  return (
    <SignupLayout>
      <Logo />
      <FieldContainer
        title="닉네임"
        description="닉네임에 특수문자 사용은 불가합니다."
        placeholder="닉네임(2 ~ 10자)"
      />
      {/* <FieldContainer
        title="핸드폰 번호"
        description="본인 명의의 핸드폰 번호를 입력해주세요."
        placeholder="숫자만 입력"
        isCertification={true}
      /> */}
      <AgreeContainer />
      <SignupSubmit onClick={handleClickSignup}>회원가입 하기</SignupSubmit>
    </SignupLayout>
  );
};

export default Signup;
