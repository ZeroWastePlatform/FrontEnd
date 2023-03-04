import React from "react";
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
const Post = () => {
  return (
    <PostContent>
      <PostContentSubTitle>HOT</PostContentSubTitle>
      <PostContentMainBox>
        <PostContentMain>
          <PostContentTitle>천연수세미 써보고 싶은데 설거지할 때 좋은가요?</PostContentTitle>
          <PostContentBody>
            시중에 파는 스펀지 수세미는 미세 플라스틱이 너무 많이 나오는 것 같아서요. 이번에 천연 수세미로 바꿀까 생각
            중인데 써보신 그리너스 계신가요?
          </PostContentBody>
        </PostContentMain>
        <PostContentMainImg />
      </PostContentMainBox>
      <PostContentKeywordList>
        <PostContentKeywordItem>#제로웨이스트</PostContentKeywordItem>
        <PostContentKeywordItem>#천연수세미</PostContentKeywordItem>
        <PostContentKeywordItem>#주방용품</PostContentKeywordItem>
      </PostContentKeywordList>
      <PostContentSubInfo>
        <PostContentSubInfoLeft>
          <PostContentSubInfoProfileImg />
          <PostContentSubInfoProfileName>dngur9801</PostContentSubInfoProfileName>
          <PostContentSubInfoDate>3일 전</PostContentSubInfoDate>
        </PostContentSubInfoLeft>
        <PostContentSubInfoRight>
          <PostContentSubInfoComments>1</PostContentSubInfoComments>
          <PostContentSubInfoLiked>2</PostContentSubInfoLiked>
          <PostContentSubInfoVisit>3</PostContentSubInfoVisit>
        </PostContentSubInfoRight>
      </PostContentSubInfo>
    </PostContent>
  );
};

export default Post;
