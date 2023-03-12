import React from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import CommentBox from "./CommentBox";

interface CommentBoxContainerProps {
  postId: number;
}

const CommentBoxContainer = ({ postId }: CommentBoxContainerProps) => {
  const { data } = useSuspenseQuery(["Community", "Article", "CommentBox", postId], `posts/comments/${postId}`);
  console.log("comment", data);

  return <CommentBox />;
};

export default CommentBoxContainer;
