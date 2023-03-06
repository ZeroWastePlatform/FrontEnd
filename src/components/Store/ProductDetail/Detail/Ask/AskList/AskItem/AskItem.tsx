import { useState } from "react";
import { AskDataContentType } from "../../AskContainer";
import {
  AskItemAskChecked,
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
import lockImg from "../../../../../../../assets/images/lock.svg";
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
            {data.secret ? <img src={lockImg} /> : null}[{data.category}]
          </AskItemCategory>
          <AskItemTitle>{data.secret ? "비밀글입니다." : data.title}</AskItemTitle>
          {data.answered ? <AskItemAskChecked>답변완료</AskItemAskChecked> : null}
        </AskItemTypeTitleBox>
        <AskItemUserId>{data.nickname}***</AskItemUserId>
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
              <i>판매자 답변</i>
            </AskItemDetailTitle>
            <AskItemDetailContent>{data.answer}</AskItemDetailContent>
          </AskItemDetailSubBox>
        </AskItemDetailBox>
      )}
    </>
  );
};

export default AskItem;
