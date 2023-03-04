import React, { useState } from "react";
import {
  ContentBoxBody,
  ContentBoxComment,
  ContentBoxDate,
  ContentBoxInfo,
  ContentBoxLayout,
  ContentBoxLikeImg,
  ContentBoxProfile,
  ContentBoxProfileImg,
  ContentBoxProfileName,
  ContentBoxProfileTextBox,
  ContentBoxSubInfo,
  ContentBoxTitle,
  ContentBoxType,
  ContentBoxVisit,
} from "./ContentBox.styles";
import onLikeImg from "../../../../assets/images/on_like.png";
import offLikeImg from "../../../../assets/images/off_like.png";

const ContentBox = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <ContentBoxLayout>
      <ContentBoxType>자유게시판</ContentBoxType>
      <ContentBoxTitle>본문 제목이에요</ContentBoxTitle>
      <ContentBoxInfo>
        <ContentBoxProfile>
          <ContentBoxProfileImg />
          <ContentBoxProfileTextBox>
            <ContentBoxProfileName>dngur9801</ContentBoxProfileName>
            <ContentBoxDate>3시간 전</ContentBoxDate>
          </ContentBoxProfileTextBox>
        </ContentBoxProfile>
        <ContentBoxSubInfo>
          <ContentBoxComment>10</ContentBoxComment>
          <ContentBoxVisit>1,220</ContentBoxVisit>
        </ContentBoxSubInfo>
      </ContentBoxInfo>
      <ContentBoxBody>본문 텍스트입니다 뭘 쓰는게 좋을까요 비건파스타 해먹었어요 옴뇸뇸 맛있어요 짱!</ContentBoxBody>
      <ContentBoxLikeImg src={isLike ? onLikeImg : offLikeImg} onClick={() => setIsLike(prev => !prev)} />
    </ContentBoxLayout>
  );
};

export default ContentBox;
