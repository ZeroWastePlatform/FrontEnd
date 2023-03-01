import React from "react";
import CategoryNavigation from "../../components/Community/Common/CategoryNavigation/CategoryNavigation";
import styled from "styled-components";
import AsideContainer from "../../components/Community/Article/Aside/AsideContainer";
import ContentBoxContainer from "../../components/Community/Article/ContentBox/ContentBoxContainer";
import CommentBoxContainer from "../../components/Community/Article/CommentBox/CommentBoxContainer";

const Article = () => {
  return (
    <>
      <CategoryNavigation />
      <ArticleLayout>
        <ArticleBox>
          <ContentBoxContainer />
          <CommentBoxContainer />
        </ArticleBox>
        <AsideContainer />
      </ArticleLayout>
    </>
  );
};

const ArticleLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;
const ArticleBox = styled.div``;

export default Article;
