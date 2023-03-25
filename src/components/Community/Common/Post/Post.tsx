import React from "react";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../../../types";
import {
  PostContent,
  PostContentBody,
  PostContentKeywordItem,
  PostContentKeywordList,
  PostContentMain,
  PostContentMainBox,
  PostContentMainImg,
  PostContentSubInfo,
  PostContentSubInfoComments,
  PostContentSubInfoDate,
  PostContentSubInfoLeft,
  PostContentSubInfoLiked,
  PostContentSubInfoProfileImg,
  PostContentSubInfoProfileName,
  PostContentSubInfoRight,
  PostContentSubInfoVisit,
  PostContentSubTitle,
  PostContentTitle,
} from "./Post.styles";

const Post = ({
  id,
  kind,
  nickname,
  title,
  content,
  viewCnt,
  replyCnt,
  recommendCnt,
  createdAt,
  hashtags,
}: PostType) => {
  const navigate = useNavigate();
  return (
    <PostContent onClick={() => navigate(`/community/article/${id}`)}>
      <PostContentSubTitle>HOT</PostContentSubTitle>
      <PostContentMainBox>
        <PostContentMain>
          <PostContentTitle>{title}</PostContentTitle>
          <PostContentBody>{content}</PostContentBody>
        </PostContentMain>
        <PostContentMainImg />
      </PostContentMainBox>
      <PostContentKeywordList>
        {hashtags.map((hashtag, idx) => (
          <PostContentKeywordItem key={idx}>{hashtag}</PostContentKeywordItem>
        ))}
      </PostContentKeywordList>
      <PostContentSubInfo>
        <PostContentSubInfoLeft>
          <PostContentSubInfoProfileImg />
          <PostContentSubInfoProfileName>{nickname}</PostContentSubInfoProfileName>
          <PostContentSubInfoDate>{createdAt}</PostContentSubInfoDate>
        </PostContentSubInfoLeft>
        <PostContentSubInfoRight>
          <PostContentSubInfoComments>{replyCnt}</PostContentSubInfoComments>
          <PostContentSubInfoLiked>{recommendCnt}</PostContentSubInfoLiked>
          <PostContentSubInfoVisit>{viewCnt}</PostContentSubInfoVisit>
        </PostContentSubInfoRight>
      </PostContentSubInfo>
    </PostContent>
  );
};

export default Post;
