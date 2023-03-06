import styled from "styled-components";

export const CommuintyLayout = styled.section``;

export const MyInfoRow = styled.div`
  margin-bottom: 33px;
  display: flex;
  align-items: center;
`;

export const MyArticleSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
`;

export const MyArticleNumber = styled(MyArticleSpan)`
  color: #66f095;
  margin-left: 10px;
  margin-right: 15px;
  ::after {
    content: " |";
    font-family: "Pretendard";
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #bdbdbe;
  }
`;

export const MyCommentSpan = styled(MyArticleSpan)`
  color: #bdbdbe;
  margin-right: 10px;
`;

export const MyCommentNumber = styled(MyCommentSpan)``;

export const CommunitySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CommuintyArticle = styled.article`
  width: 883px;
  border-bottom: 2px solid #d3d3d4;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TitleText = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
`;

export const EditButton = styled.button``;

export const ArticleInfoRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
`;

export const WritingTime = styled.span`
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 24px;
  color: #252525;
`;

export const CommentBox = styled.div`
  display: flex;
  gap: 5px;
  img {
    width: 18px;
    height: 18px;
  }
`;

export const CommentNumber = styled.span`
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 22px;
`;

export const InquiryBox = styled.div`
  display: flex;
  gap: 5px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const InquiryNumber = styled(CommentNumber)``;
