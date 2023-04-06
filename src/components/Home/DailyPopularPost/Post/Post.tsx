import {
  PostCategory,
  PostCntBox,
  PostCommentCnt,
  PostContent,
  PostDate,
  PostHashtag,
  PostHashtagBox,
  PostImg,
  PostLayout,
  PostLikeCnt,
  PostMainBox,
  PostSubInfo,
  PostTitle,
  PostUserImg,
  PostUserName,
  PostViewCnt,
} from "./Post.styles";
import { PostType } from "../DailyPopularPostContainer";

const Post = ({ kind, title, nickname, content, viewCnt, replyCnt, recommendCnt, createdAt }: PostType) => {
  console.log(kind);
  return (
    <PostLayout>
      <PostMainBox>
        <PostCategory>{categoryMap[kind]}</PostCategory>
        <PostTitle>{title}</PostTitle>
        <PostContent>{content}</PostContent>
        <PostSubInfo>
          <PostUserImg />
          <PostUserName>{nickname}</PostUserName>
          <PostDate>{createdAt}</PostDate>
          <PostHashtagBox>
            <PostHashtag>#플라스틱 프리</PostHashtag>
            <PostHashtag>#비건요리</PostHashtag>
            <PostHashtag>#주방용품</PostHashtag>
          </PostHashtagBox>
          <PostCntBox>
            <PostCommentCnt>{replyCnt}</PostCommentCnt>
            <PostLikeCnt>{recommendCnt}</PostLikeCnt>
            <PostViewCnt>{viewCnt}</PostViewCnt>
          </PostCntBox>
        </PostSubInfo>
      </PostMainBox>
      <PostImg />
    </PostLayout>
  );
};

const categoryMap = [null, "자유게시판", "정보공유", "중고거래"];
export default Post;
