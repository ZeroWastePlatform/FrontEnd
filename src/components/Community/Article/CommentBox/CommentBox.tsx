import React, { useState } from "react";
import InputBox from "./Common/InputBox/InputBox";
import Comment from "./Comment/Comment";
import {
  CommentBoxComments,
  CommentBoxLayout,
  CommentBoxTotal,
  CommentBoxTotalNum,
  CommentBoxTotalText,
} from "./CommentBox.styles";
import { CommentType } from "../../../../types";
import { UseMutateFunction } from "react-query";
import { AxiosResponse } from "axios";

interface CommentBoxProps {
  comments: CommentType[];
  regist: UseMutateFunction<AxiosResponse<any, unknown>, unknown, unknown, unknown>;
  handleClickRemove: (id: number) => void;
}

const CommentBox = ({ comments, regist, handleClickRemove }: CommentBoxProps) => {
  const [isEditId, setIsEditId] = useState(0);

  const commentList = comments.filter(comment => {
    return !comment.parentId;
  });

  return (
    <CommentBoxLayout>
      <CommentBoxTotal>
        <CommentBoxTotalText>댓글</CommentBoxTotalText>
        <CommentBoxTotalNum>{comments.length}</CommentBoxTotalNum>
      </CommentBoxTotal>
      <InputBox placeholder="댓글을 남겨 보세요." regist={regist} />
      <CommentBoxComments>
        {commentList.map((comment, idx) => (
          <Comment
            key={comment.id}
            isEdit={comment.id === isEditId}
            setIsEditId={setIsEditId}
            commentId={comment.id}
            content={comment.content}
            memberId={comment.commentMember.memberId}
            nickname={comment.commentMember.nickname}
            handleClickRemove={handleClickRemove}
            comments={comments}
          />
        ))}
      </CommentBoxComments>
    </CommentBoxLayout>
  );
};

export default CommentBox;
