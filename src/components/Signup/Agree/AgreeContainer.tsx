import React, { useState } from "react";
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
  const [checkedList, setCheckedLists] = useState<typeof agreeList>([]);

  const onCheckedAll = (checked: any) => {
    if (checked) {
      setCheckedLists([...agreeList]);
    } else {
      setCheckedLists([]);
    }
  };

  const onCheckedElement = (checked: any, list: any) => {
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
      onCheckedAll={onCheckedAll}
      onCheckedElement={onCheckedElement}
    />
  );
};

export default AgreeContainer;
