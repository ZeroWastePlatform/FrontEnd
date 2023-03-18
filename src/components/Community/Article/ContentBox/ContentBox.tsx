import React, { useState } from "react";
import {
  ContentBoxBody,
  ContentBoxBtns,
  ContentBoxComment,
  ContentBoxDate,
  ContentBoxDelete,
  ContentBoxEdit,
  ContentBoxHeader,
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
import { UseMutateFunction } from "react-query";
import { AxiosResponse } from "axios";

interface ContentBoxProps {
  id: number;
  kind: number;
  title: string;
  content: string;
  createdAt: string;
  replyCnt: number;
  viewCnt: number;
  handleDeletePost: (postId: number) => void;
  toggleLike: UseMutateFunction<AxiosResponse<any, unknown>, unknown, unknown, unknown>;
}

const ContentBox = ({
  id,
  kind,
  title,
  content,
  createdAt,
  replyCnt,
  viewCnt,
  handleDeletePost,
  toggleLike,
}: ContentBoxProps) => {
  const [isLike, setIsLike] = useState(false);

  const contentType = kind === 1 ? "자유게시판" : kind === 2 ? "중고거래" : kind === 3 && "정보공유";

  return (
    <ContentBoxLayout>
      <ContentBoxHeader>
        <ContentBoxType>{contentType}</ContentBoxType>
        <ContentBoxBtns>
          <ContentBoxEdit to={`/community/article/${id}/edit`}>수정</ContentBoxEdit>
          <ContentBoxDelete onClick={() => handleDeletePost(id)}>삭제</ContentBoxDelete>
        </ContentBoxBtns>
      </ContentBoxHeader>
      <ContentBoxTitle>{title}</ContentBoxTitle>
      <ContentBoxInfo>
        <ContentBoxProfile>
          <ContentBoxProfileImg />
          <ContentBoxProfileTextBox>
            <ContentBoxProfileName>dngur9801</ContentBoxProfileName>
            <ContentBoxDate>{createdAt}</ContentBoxDate>
          </ContentBoxProfileTextBox>
        </ContentBoxProfile>
        <ContentBoxSubInfo>
          <ContentBoxComment>{replyCnt}</ContentBoxComment>
          <ContentBoxVisit>{viewCnt}</ContentBoxVisit>
        </ContentBoxSubInfo>
      </ContentBoxInfo>
      <ContentBoxBody>{content}</ContentBoxBody>
      <ContentBoxLikeImg
        src={isLike ? onLikeImg : offLikeImg}
        onClick={() => {
          setIsLike(prev => !prev);
          toggleLike(id);
        }}
      />
    </ContentBoxLayout>
  );
};

export default ContentBox;
