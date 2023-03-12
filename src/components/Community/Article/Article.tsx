import React from "react";
import CategoryNavigation from "../Common/CategoryNavigation/CategoryNavigation";
import AsideContainer from "./Aside/AsideContainer";
import CommentBoxContainer from "./CommentBox/CommentBoxContainer";
import ContentBoxContainer from "./ContentBox/ContentBoxContainer";
import { ArticleBox, ArticleLayout } from "./Article.styles";
import { PostType } from "../../../types";

interface ArticleProps {
  post: PostType;
}

const Article = ({ post }: ArticleProps) => {
  return (
    <>
      <CategoryNavigation />
      <ArticleLayout>
        <ArticleBox>
          <ContentBoxContainer post={post} />
          <CommentBoxContainer postId={post.id} />
        </ArticleBox>
        <AsideContainer kind={post.kind} />
      </ArticleLayout>
    </>
  );
};

export default Article;
