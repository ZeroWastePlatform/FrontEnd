import React from "react";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import customAPI from "../../../../lib/customAPI";
import { CommentResponseType } from "../../../../types";
import CommentBox from "./CommentBox";

interface CommentBoxContainerProps {
  postId: number;
}

const CommentBoxContainer = ({ postId }: CommentBoxContainerProps) => {
  const { data } = useSuspenseQuery<CommentResponseType>(
    ["Community", "Article", "CommentBox", postId],
    `posts/comments/${postId}`,
  );

  const { mutate: regist } = useSetQueryMutate(
    data => customAPI.post("posts/comments", data),
    ["Community", "Article", "CommentBox"],
    e => {
      alert("댓글이 등록되었습니다.");
    },
  );

  const { mutate: remove } = useSetQueryMutate(
    data => customAPI.delete(`posts/comments/${data}`),
    ["Community", "Article", "CommentBox"],
    e => {
      alert("댓글이 삭제되었습니다.");
    },
  );

  const handleClickRemove = (id: number) => {
    if (confirm("댓글을 삭제하시겠습니까?")) {
      remove(id);
    }
  };

  console.log("comment", data);

  return <CommentBox comments={data.content} regist={regist} handleClickRemove={handleClickRemove} />;
};

export default CommentBoxContainer;
