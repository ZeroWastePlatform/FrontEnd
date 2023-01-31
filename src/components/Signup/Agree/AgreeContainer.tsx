import React from "react";
import Agree from "./Agree";

const agreeList = [
  {
    text: "만 14세 이상입니다.",
    description: "(필수)",
  },
  {
    text: "이용약관 동의",
    description: "(필수)",
  },
  {
    text: "개인정보수집 및 이용동의",
    description: "(필수)",
  },
  {
    text: "개인정보 마케팅 활용동의",
    description: "(선택)",
  },
];

const AgreeContainer = () => {
  return <Agree agreeList={agreeList} />;
};

export default AgreeContainer;
