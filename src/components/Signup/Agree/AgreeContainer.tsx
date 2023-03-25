import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { checkedListSelector } from "../../../atom/signupForm";
import Agree from "./Agree";

const agreeList = [
  {
    id: 1,
    text: "만 14세 이상입니다.",
    description: "(필수)",
  },
  {
    id: 2,
    text: "이용약관 동의",
    description: "(필수)",
  },
  {
    id: 3,
    text: "개인정보수집 및 이용동의",
    description: "(필수)",
  },
  {
    id: 4,
    text: "개인정보 마케팅 활용동의",
    description: "(선택)",
  },
];

const AgreeContainer = () => {
  const [checkedList, setCheckedLists] = useRecoilState(checkedListSelector);

  const handleChangeAll = (checked: any) => {
    if (checked) {
      setCheckedLists([...agreeList]);
    } else {
      setCheckedLists([]);
    }
  };

  const handleChangeElement = (checked: any, list: any) => {
    if (checked) {
      setCheckedLists([...checkedList, list]);
    } else {
      setCheckedLists(checkedList.filter(el => el !== list));
    }
  };
  return (
    <Agree
      agreeList={agreeList}
      checkedList={checkedList}
      handleChangeAll={handleChangeAll}
      handleChangeElement={handleChangeElement}
    />
  );
};

export default AgreeContainer;
