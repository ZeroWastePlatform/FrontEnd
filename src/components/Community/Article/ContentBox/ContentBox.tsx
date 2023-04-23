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
  ContentBoxLiked,
  ContentBoxLikeImg,
  ContentBoxProfile,
  ContentBoxProfileImg,
  ContentBoxProfileName,
  ContentBoxProfileTextBox,
  ContentBoxSubInfo,
  ContentBoxTitle,
  ContentBoxType,
  ContentBoxVisit,
  ContentBoxImg,
} from "./ContentBox.styles";
import onLikeImg from "../../../../assets/images/on_like.png";
import offLikeImg from "../../../../assets/images/off_like.png";
import { UseMutateFunction } from "react-query";
import { AxiosResponse } from "axios";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../atom/userInfo";

interface ContentBoxProps {
  id: number;
  userId: number;
  kind: number;
  title: string;
  nickname: string;
  content: string;
  createdAt: string;
  replyCnt: number;
  viewCnt: number;
  recommendCnt: number;
  serverFileUrls: string[];
  handleDeletePost: (postId: number) => void;
  toggleLike: UseMutateFunction<AxiosResponse<any, unknown>, unknown, unknown, unknown>;
}

const ContentBox = ({
  id,
  userId,
  kind,
  title,
  nickname,
  content,
  createdAt,
  replyCnt,
  viewCnt,
  recommendCnt,
  serverFileUrls,
  handleDeletePost,
  toggleLike,
}: ContentBoxProps) => {
  const [isLike, setIsLike] = useState(false);
  const userInfo = useRecoilValue(userInfoAtom);

  const contentType = kind === 1 ? "자유게시판" : kind === 2 ? "중고거래" : kind === 3 && "정보공유";
  return (
    <ContentBoxLayout>
      <ContentBoxHeader>
        <ContentBoxType>{contentType}</ContentBoxType>
        {userInfo.id === userId && (
          <ContentBoxBtns>
            <ContentBoxEdit to={`/community/article/${id}/edit`}>수정</ContentBoxEdit>
            <ContentBoxDelete onClick={() => handleDeletePost(id)}>삭제</ContentBoxDelete>
          </ContentBoxBtns>
        )}
      </ContentBoxHeader>
      <ContentBoxTitle>{title}</ContentBoxTitle>
      <ContentBoxInfo>
        <ContentBoxProfile>
          <ContentBoxProfileImg />
          <ContentBoxProfileTextBox>
            <ContentBoxProfileName>{nickname}</ContentBoxProfileName>
            <ContentBoxDate>{createdAt}</ContentBoxDate>
          </ContentBoxProfileTextBox>
        </ContentBoxProfile>
        <ContentBoxSubInfo>
          <ContentBoxComment>{replyCnt}</ContentBoxComment>
          <ContentBoxVisit>{viewCnt}</ContentBoxVisit>
          <ContentBoxLiked>{recommendCnt}</ContentBoxLiked>
        </ContentBoxSubInfo>
      </ContentBoxInfo>
      {serverFileUrls.map((url, idx) => (
        <ContentBoxImg src={url} alt="" key={idx} />
      ))}
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
