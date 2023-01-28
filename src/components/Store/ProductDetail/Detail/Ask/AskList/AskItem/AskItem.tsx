import { useState } from "react";
import { AskDataContentType } from "../../AskContainer";
import {
  AskItemCategory,
  AskItemDate,
  AskItemDetailBox,
  AskItemDetailContent,
  AskItemDetailSubBox,
  AskItemDetailTitle,
  AskItemLayout,
  AskItemOrder,
  AskItemTitle,
  AskItemTypeTitleBox,
  AskItemUserId,
} from "./AskItem.styles";

interface AskItemProps {
  data: AskDataContentType;
}

const AskItem = ({ data }: AskItemProps) => {
  const [detailOpen, setDetailOpen] = useState(false);
  return (
    <>
      <AskItemLayout
        onClick={() => {
          if (!data.secret) setDetailOpen(!detailOpen);
        }}
      >
        <AskItemOrder>{data.id}</AskItemOrder>
        <AskItemTypeTitleBox>
          <AskItemCategory>
            {data.secret && "비밀"}[{data.category}]
          </AskItemCategory>
          <AskItemTitle>{data.secret ? "비밀글입니다." : data.title}</AskItemTitle>
        </AskItemTypeTitleBox>
        <AskItemUserId>{data.nickname}</AskItemUserId>
        <AskItemDate>{data.date}</AskItemDate>
      </AskItemLayout>
      {detailOpen && (
        <AskItemDetailBox onClick={() => setDetailOpen(!detailOpen)}>
          <AskItemDetailSubBox>
            <AskItemDetailTitle>
              <i>[{data.category}]</i>
              {data.title}
            </AskItemDetailTitle>
            <AskItemDetailContent>{data.content}</AskItemDetailContent>
          </AskItemDetailSubBox>
          <AskItemDetailSubBox>
            <AskItemDetailTitle>
              <i>답변</i>
            </AskItemDetailTitle>
            <AskItemDetailContent>{data.answer}</AskItemDetailContent>
          </AskItemDetailSubBox>
        </AskItemDetailBox>
      )}
    </>
  );
};

export default AskItem;
