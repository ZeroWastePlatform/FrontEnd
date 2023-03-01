import React from "react";
import { InputBoxButton, InputBoxInput, InputBoxLayout, InputBoxMyProfileImg } from "./Input.styles";

interface InputBoxProps {
  placeholder: string;
}

const InputBox = ({ placeholder }: InputBoxProps) => {
  return (
    <InputBoxLayout>
      <InputBoxMyProfileImg />
      <InputBoxInput placeholder={placeholder} />
      <InputBoxButton>입력</InputBoxButton>
    </InputBoxLayout>
  );
};

export default InputBox;
