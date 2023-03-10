import React from "react";
import { useRecoilValue } from "recoil";
import { signupFormAtom } from "../../atom/signupForm";
import Signup from "./Signup";

const SignupContainer = () => {
  const signupForm = useRecoilValue(signupFormAtom);
  console.log(signupForm);
  const handleClickSignup = () => {
    if (!signupForm.nickName.match(/^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{2,10}$/)) {
      alert("닉네임은 2~10자로 특수문자를 제외하고 입력해 주세요.");
    } else if (signupForm.checkedList.filter(item => item.description === "(필수)").length !== 3) {
      alert("필수 동의항목을 모두 선택해 주세요");
    }
  };
  return <Signup handleClickSignup={handleClickSignup} />;
};

export default SignupContainer;
