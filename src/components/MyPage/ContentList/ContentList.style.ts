import styled from "styled-components";

export const ContentListLayout = styled.section``;

export const ContentListBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const BookMarkParagraph = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

export const EditButton = styled.button`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #7a7b7d;
`;

export const ContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 45px;
  grid-column-gap: 16px;
`;

export const ContentArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

export const CommentBox = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  background: #bfedbf;
  border-radius: 10px;
`;

export const BookMarkButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const ArticleTitle = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #252525;
  margin-top: 16px;
  margin-bottom: 2px;
  max-width: 280px;
`;

export const ArticleParagraph = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 129.84%;
  color: #252525;
  max-width: 280px;
`;
