import React from "react";
import {
  AgreeBox,
  AgreeLayout,
  AgreeSelectAll,
  AgreeSelectAllInput,
  AgreeSelectAllLabel,
  AgreeSelectInput,
  AgreeSelectItem,
  AgreeSelectList,
  AgreeSelectLabel,
  AgreeTitle,
  AgreeSelectAllText,
  AgreeSelectText,
} from "./Agree.styles";

type AgreeList = {
  id: number;
  text: string;
  description: string;
}[];
interface AgreeProps {
  agreeList: AgreeList;
  checkedList: AgreeList;
  onCheckedAll: (checked: any) => void;
  onCheckedElement: (checked: any, list: any) => void;
}

const Agree = ({ agreeList, checkedList, onCheckedAll, onCheckedElement }: AgreeProps) => {
  return (
    <AgreeLayout>
      <AgreeTitle>약관동의</AgreeTitle>
      <AgreeBox>
        <AgreeSelectAll>
          <AgreeSelectAllInput
            type="checkbox"
            id="all"
            onChange={(e: any) => onCheckedAll(e.target.checked)}
            checked={checkedList.length === 0 ? false : checkedList.length === agreeList.length ? true : false}
          />
          <AgreeSelectAllLabel htmlFor="all">전체동의</AgreeSelectAllLabel>
          <AgreeSelectAllText> (선택항목에 대한 동의 포함)</AgreeSelectAllText>
        </AgreeSelectAll>
        <AgreeSelectList>
          {agreeList.map(item => (
            <AgreeSelectItem key={item.id}>
              <AgreeSelectInput
                type="checkbox"
                id={"ck" + item.id}
                onChange={(e: any) => onCheckedElement(e.target.checked, item)}
                checked={checkedList.includes(item as never) ? true : false}
              />
              <AgreeSelectLabel htmlFor={"ck" + item.id}>{item.text}</AgreeSelectLabel>
              <AgreeSelectText color={item.description === "(선택)" ? "#A7A7A8" : "inherit"}>
                {item.description}
              </AgreeSelectText>
            </AgreeSelectItem>
          ))}
        </AgreeSelectList>
      </AgreeBox>
    </AgreeLayout>
  );
};

export default Agree;
