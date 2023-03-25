import React from "react";
import { useParams } from "react-router-dom";
import useSuspenseQuery from "../../../hooks/useSuspenseQuery";
import { PostType } from "../../../types";
import Article from "./Article";

const ArticleContainer = () => {
  const { id } = useParams();
  const { data } = useSuspenseQuery<PostType>(["Community", "Article", "ContentBox", id], `posts/${id}`);

  console.log("post : ", data);
  return <Article post={data} />;
};

export default ArticleContainer;
