import React, { useState } from "react";
import InputBox from "../../Common/InputBox/InputBox";
import {
  CommentActions,
  CommentBox,
  CommentButton,
  CommentContent,
  CommentLayout,
  CommentReplyBox,
  CommentUserName,
  CommentUserProfile,
  CommentUserProfileBox,
} from "./Comment.styles";
import Reply from "./Reply/Reply";

const Comment = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  return (
    <CommentLayout>
      <CommentUserProfileBox>
        <CommentUserProfile />
      </CommentUserProfileBox>
      <CommentBox>
        <CommentUserName>dngur9801</CommentUserName>
        <CommentContent>
          내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ
        </CommentContent>
        <CommentActions>
          <CommentButton onClick={() => setIsShowInput(prev => !prev)}>답글</CommentButton>
          <CommentButton>수정</CommentButton>
          <CommentButton>삭제</CommentButton>
        </CommentActions>
        <CommentReplyBox>
          <Reply></Reply>
          {isShowInput && <InputBox placeholder="답글을 남겨 주세요." />}
        </CommentReplyBox>
      </CommentBox>
    </CommentLayout>
  );
};

export default Comment;
