import {
  ArticleInfoRow,
  CommentBox,
  CommentNumber,
  CommuintyArticle,
  CommuintyLayout,
  CommunitySection,
  EditButton,
  InquiryBox,
  InquiryNumber,
  MyArticleNumber,
  MyArticleSpan,
  MyCommentNumber,
  MyCommentSpan,
  MyInfoRow,
  TitleBox,
  TitleText,
  WritingTime,
} from "./Community.style";
import commentImg from "../../../assets/images/comments.svg";

const Commuinty = () => {
  return (
    <CommuintyLayout>
      <MyInfoRow>
        <MyArticleSpan>내가 작성한 게시글</MyArticleSpan>
        <MyArticleNumber>10</MyArticleNumber>

        <MyCommentSpan>내가 작성한 댓글</MyCommentSpan>
        <MyCommentNumber>256</MyCommentNumber>
      </MyInfoRow>

      <CommunitySection>
        <CommuintyArticle>
          <TitleBox>
            <TitleText>그리너스 작성한 글 목록</TitleText>
            <EditButton>수정</EditButton>
          </TitleBox>
          <ArticleInfoRow>
            <WritingTime>1분 전</WritingTime>
            <CommentBox>
              <img src={commentImg} />
              <CommentNumber>22</CommentNumber>
            </CommentBox>

            <InquiryBox>
              <InquiryNumber>1,220</InquiryNumber>
            </InquiryBox>
          </ArticleInfoRow>
        </CommuintyArticle>

        <CommuintyArticle>
          <TitleBox>
            <TitleText>그리너스 작성한 글 목록</TitleText>
            <EditButton>수정</EditButton>
          </TitleBox>
          <ArticleInfoRow>
            <WritingTime>1분 전</WritingTime>
            <CommentBox>
              <img src={commentImg} />
              <CommentNumber>22</CommentNumber>
            </CommentBox>

            <InquiryBox>
              <InquiryNumber>1,220</InquiryNumber>
            </InquiryBox>
          </ArticleInfoRow>
        </CommuintyArticle>
      </CommunitySection>
    </CommuintyLayout>
  );
};

export default Commuinty;
