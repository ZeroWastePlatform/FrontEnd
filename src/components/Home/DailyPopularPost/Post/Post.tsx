import React from "react";
import {
  PostCommentNum,
  PostContent,
  PostDate,
  PostImg,
  PostLayout,
  PostSubInfo,
  PostText,
  PostTitle,
  PostUserImg,
  PostUserName,
} from "./Post.styles";

const Post = () => {
  return (
    <PostLayout>
      <PostContent>
        <PostTitle>인기글 제목</PostTitle>
        <PostText>
          텍스트본문텍스트본문텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문
          텍스트본문 텍스트본문텍스트본문텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문
          텍스트본문 텍스트본문텍스트본문텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문 텍스트본문
        </PostText>
        <PostSubInfo>
          <PostUserImg />
          <PostUserName>dngur9801</PostUserName>
          <PostDate>7일 전</PostDate>
          <PostCommentNum>22</PostCommentNum>
        </PostSubInfo>
      </PostContent>
      <PostImg />
    </PostLayout>
  );
};

export default Post;
