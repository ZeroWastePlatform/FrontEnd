import React from "react";
import CategoryNavigation from "../../components/Community/Common/CategoryNavigation/CategoryNavigation";
import styled from "styled-components";
import AsideContainer from "../../components/Community/Article/Aside/AsideContainer";
import ContentBoxContainer from "../../components/Community/Article/ContentBox/ContentBoxContainer";
import CommentBoxContainer from "../../components/Community/Article/CommentBox/CommentBoxContainer";
import { useParams } from "react-router-dom";
import useSuspenseQuery from "../../hooks/useSuspenseQuery";
import { PostType } from "../../types";

const Article = () => {
  const { id } = useParams();
  const { data } = useSuspenseQuery<PostType>(["Community", "Article", "ContentBox", id], `posts/${id}`);
  console.log("data : ", data);
  return (
    <>
      <CategoryNavigation />
      <ArticleLayout>
        <ArticleBox>
          <ContentBoxContainer post={data} />
          <CommentBoxContainer />
        </ArticleBox>
        <AsideContainer kind={data.kind} />
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
