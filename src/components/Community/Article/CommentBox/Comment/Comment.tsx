import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { UseMutateFunction } from "react-query";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../../atom/userInfo";
import useSetQueryMutate from "../../../../../hooks/useSetQueryMutate";
import customAPI from "../../../../../lib/customApi";
import InputBox from "../Common/InputBox/InputBox";
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

interface CommentProps {
  commentId: number;
  content: string;
  memberId: number;
  nickname: string;
  handleClickRemove: (id: number) => void;
}

const Comment = ({ commentId, content, memberId, nickname, handleClickRemove }: CommentProps) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const userInfo = useRecoilValue(userInfoAtom);

  const { mutate: regist } = useSetQueryMutate(
    data => customAPI.post(`posts/comments/${commentId}`, data),
    ["Community", "Article", "CommentBox"],
    e => {
      alert("댓글이 등록되었습니다.");
    },
  );

  return (
    <CommentLayout>
      <CommentUserProfileBox>
        <CommentUserProfile />
      </CommentUserProfileBox>
      <CommentBox>
        <CommentUserName>{nickname}</CommentUserName>
        <CommentContent>{content}</CommentContent>
        <CommentActions>
          <CommentButton onClick={() => setIsShowInput(prev => !prev)}>답글</CommentButton>
          {memberId === userInfo.id && (
            <>
              <CommentButton>수정</CommentButton>
              <CommentButton onClick={() => handleClickRemove(commentId)}>삭제</CommentButton>
            </>
          )}
        </CommentActions>
        <CommentReplyBox>
          <Reply></Reply>
          {isShowInput && <InputBox placeholder="답글을 남겨 주세요." regist={regist} />}
        </CommentReplyBox>
      </CommentBox>
    </CommentLayout>
  );
};

export default Comment;
