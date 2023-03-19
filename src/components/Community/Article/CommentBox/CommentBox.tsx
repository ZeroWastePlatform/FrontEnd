import React from "react";
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
  return (
    <CommentBoxLayout>
      <CommentBoxTotal>
        <CommentBoxTotalText>댓글</CommentBoxTotalText>
        <CommentBoxTotalNum>{comments.length}</CommentBoxTotalNum>
      </CommentBoxTotal>
      <InputBox placeholder="댓글을 남겨 보세요." regist={regist} />
      <CommentBoxComments>
        {comments.map((comment, idx) => (
          <Comment
            key={comment.id}
            commentId={comment.id}
            content={comment.content}
            memberId={comment.commentMember.memberId}
            nickname={comment.commentMember.nickname}
            handleClickRemove={handleClickRemove}
          />
        ))}
      </CommentBoxComments>
    </CommentBoxLayout>
  );
};

export default CommentBox;
