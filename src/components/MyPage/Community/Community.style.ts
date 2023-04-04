import styled from "styled-components";

export const CommuintyLayout = styled.section``;

export const CommunityTapRow = styled.div`
  margin-bottom: 33px;
  display: flex;
  align-items: center;
`;

export const CommunityTap = styled.button``;

export const CommunityTapSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #bdbdbe;
`;

export const CommunityTapNumber = styled(CommunityTapSpan)`
  color: #bdbdbe;
  margin-left: 10px;
  margin-right: 15px;
`;

export const CommunityBoardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CommuintyBoardArticle = styled.article`
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
  font-weight: 500;
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
  align-items: center;
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
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const InquiryNumber = styled(CommentNumber)``;

export const CommunityCommentSection = styled(CommunityBoardSection)``;

export const CommunityCommentArticle = styled(CommuintyBoardArticle)``;

export const CommentContent = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 20px;
`;

export const CommentContentBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 30px;
`;

export const CommentCategory = styled.span`
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 24px;
  color: #919193;
`;

export const CommentTitle = styled.span`
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 24px;
  color: #252525;
`;

export const CommentInfo = styled.span`
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 22px;
  color: #66f095;
`;
