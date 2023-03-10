import React from "react";
import { useSetRecoilState } from "recoil";
import { nickNameSelector } from "../../../atom/signupForm";
import {
  CertificationBox,
  CertificationButton,
  SignupInput,
  SignupInputBox,
  SignupInputDescription,
  SignupInputTitle,
} from "./Field.styles";

interface FieldProps {
  title: string;
  description: string;
  placeholder: string;
  isCertification?: boolean;
}

const Field = ({ title, description, placeholder, isCertification }: FieldProps) => {
  const setNickName = useSetRecoilState(nickNameSelector);
  return (
    <SignupInputBox>
      <SignupInputTitle>{title}</SignupInputTitle>
      <SignupInputDescription>{description}</SignupInputDescription>
      <SignupInput placeholder={placeholder} onChange={e => setNickName(e.target.value)} />
      {isCertification && (
        <CertificationBox>
          <CertificationButton>인증번호 발송</CertificationButton>
        </CertificationBox>
      )}
    </SignupInputBox>
  );
};

export default Field;
