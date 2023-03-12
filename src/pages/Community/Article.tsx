import React, { Suspense } from "react";
import ArticleContainer from "../../components/Community/Article/ArticleContainer";
import { ErrorBoundary } from "react-error-boundary";

const Article = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
      <Suspense fallback={<div>...로딩중</div>}>
        <ArticleContainer />;
      </Suspense>
    </ErrorBoundary>
  );
};

export default Article;
