import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { signupFormAtom } from "../../atom/signupForm";
import { userInfoAtom } from "../../atom/userInfo";
import customAPI from "../../lib/customApi";
import Signup from "./Signup";

const SignupContainer = () => {
  const signupForm = useRecoilValue(signupFormAtom);
  const userInfo = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();

  const handleClickSignup = async () => {
    if (!signupForm.nickName.match(/^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{2,10}$/)) {
      alert("닉네임은 2~10자로 특수문자를 제외하고 입력해 주세요.");
    } else if (signupForm.checkedList.filter(item => item.description === "(필수)").length !== 3) {
      alert("필수 동의항목을 모두 선택해 주세요");
    } else {
      console.log("userInfo.accessToken", userInfo.accessToken);
      await axios
        .post(
          `${process.env.API_SERVER}members/signup`,
          {
            nickName: signupForm.nickName,
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.accessToken}`,
            },
          },
        )
        .then(res => {
          alert("회원가입이 완료되었습니다.");
          window.location.href = "/";
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    if (!userInfo.accessToken) {
      navigate("/");
    }
  }, [userInfo.accessToken]);
  return <Signup handleClickSignup={handleClickSignup} />;
};

export default SignupContainer;
