import React from "react";
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
  return (
    <SignupInputBox>
      <SignupInputTitle>{title}</SignupInputTitle>
      <SignupInputDescription>{description}</SignupInputDescription>
      <SignupInput placeholder={placeholder} />
      {isCertification && (
        <CertificationBox>
          <CertificationButton>인증번호 발송</CertificationButton>
        </CertificationBox>
      )}
    </SignupInputBox>
  );
};

export default Field;
