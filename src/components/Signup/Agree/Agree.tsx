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

interface AgreeProps {
  agreeList: {
    text: string;
    description: string;
  }[];
}

const Agree = ({ agreeList }: AgreeProps) => {
  return (
    <AgreeLayout>
      <AgreeTitle>약관동의</AgreeTitle>
      <AgreeBox>
        <AgreeSelectAll>
          <AgreeSelectAllInput type="checkbox" id="all" />
          <AgreeSelectAllLabel htmlFor="all">전체동의</AgreeSelectAllLabel>
          <AgreeSelectAllText> (선택항목에 대한 동의 포함)</AgreeSelectAllText>
        </AgreeSelectAll>
        <AgreeSelectList>
          {agreeList.map((item, idx) => (
            <AgreeSelectItem key={idx}>
              <AgreeSelectInput type="checkbox" id={"ck" + idx} />
              <AgreeSelectLabel htmlFor={"ck" + idx}>{item.text}</AgreeSelectLabel>
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
