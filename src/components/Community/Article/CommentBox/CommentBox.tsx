import React from "react";
import InputBox from "../Common/InputBox/InputBox";
import Comment from "./Comment/Comment";
import {
  CommentBoxComments,
  CommentBoxLayout,
  CommentBoxTotal,
  CommentBoxTotalNum,
  CommentBoxTotalText,
} from "./CommentBox.styles";

const CommentBox = () => {
  return (
    <CommentBoxLayout>
      <CommentBoxTotal>
        <CommentBoxTotalText>댓글</CommentBoxTotalText>
        <CommentBoxTotalNum>63</CommentBoxTotalNum>
      </CommentBoxTotal>
      <InputBox placeholder="댓글을 남겨 보세요." />
      <CommentBoxComments>
        <Comment />
        <Comment />
      </CommentBoxComments>
    </CommentBoxLayout>
  );
};

export default CommentBox;
