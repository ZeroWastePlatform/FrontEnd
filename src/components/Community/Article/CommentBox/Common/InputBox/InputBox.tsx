import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { UseMutateFunction } from "react-query";
import { useParams } from "react-router-dom";
import { InputBoxButton, InputBoxInput, InputBoxLayout, InputBoxMyProfileImg } from "./Input.styles";

interface InputBoxProps {
  placeholder: string;
  regist: UseMutateFunction<AxiosResponse<any, unknown>, unknown, unknown, unknown>;
}

const InputBox = ({ placeholder, regist }: InputBoxProps) => {
  const [input, setInput] = useState("");

  const { id } = useParams();

  const data = {
    postId: id,
    content: input,
  };

  return (
    <InputBoxLayout>
      <InputBoxMyProfileImg />
      <InputBoxInput placeholder={placeholder} onChange={e => setInput(e.target.value)} />
      <InputBoxButton onClick={() => regist(data)}>입력</InputBoxButton>
    </InputBoxLayout>
  );
};

export default InputBox;
