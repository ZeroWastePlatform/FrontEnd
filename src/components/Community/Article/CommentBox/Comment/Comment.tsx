import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { UseMutateFunction } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../../atom/userInfo";
import useSetQueryMutate from "../../../../../hooks/useSetQueryMutate";
import customAPI from "../../../../../lib/customAPI";
import { CommentType } from "../../../../../types";
import InputBox from "../Common/InputBox/InputBox";
import {
  CommentActions,
  CommentBox,
  CommentButton,
  CommentContent,
  CommentEditBtns,
  CommentEditInput,
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
  isEdit: boolean;
  setIsEditId: React.Dispatch<React.SetStateAction<number>>;
  handleClickRemove: (id: number) => void;
  comments: CommentType[];
}

const Comment = ({
  commentId,
  content,
  memberId,
  nickname,
  isEdit,
  setIsEditId,
  handleClickRemove,
  comments,
}: CommentProps) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const userInfo = useRecoilValue(userInfoAtom);
  const [editContent, setEditContent] = useState(content);
  const { id } = useParams();
  const [isEditReplyId, setIsEditReplyId] = useState(0);

  const { mutate: regist } = useSetQueryMutate(
    data => customAPI.post(`posts/comments/${commentId}`, data),
    ["Community", "Article", "CommentBox"],
    e => {
      alert("댓글이 등록되었습니다.");
    },
  );

  const { mutate: edit } = useSetQueryMutate(
    data =>
      customAPI.put(`posts/comments/${data}`, {
        postId: id,
        content: editContent,
      }),
    ["Community", "Article", "CommentBox"],
    e => {
      alert("댓글이 수정되었습니다..");
    },
  );

  const handleClickEdit = () => {
    edit(id);
    setIsEditId(0);
  };

  const replyList = comments.filter(comment => {
    return comment.parentId === commentId;
  });

  return (
    <CommentLayout>
      <CommentUserProfileBox>
        <CommentUserProfile />
      </CommentUserProfileBox>
      <CommentBox>
        <CommentUserName>{nickname}</CommentUserName>
        {isEdit ? (
          <CommentEditInput defaultValue={content} onChange={e => setEditContent(e.target.value)} />
        ) : (
          <CommentContent>{content}</CommentContent>
        )}
        {isEdit ? (
          <CommentEditBtns>
            <CommentButton onClick={handleClickEdit}>확인</CommentButton>
            <CommentButton onClick={() => setIsEditId(0)}>취소</CommentButton>
          </CommentEditBtns>
        ) : (
          <CommentActions>
            <CommentButton onClick={() => setIsShowInput(prev => !prev)}>답글</CommentButton>
            {memberId === userInfo.id && (
              <>
                <CommentButton onClick={() => setIsEditId(commentId)}>수정</CommentButton>
                <CommentButton onClick={() => handleClickRemove(commentId)}>삭제</CommentButton>
              </>
            )}
          </CommentActions>
        )}

        <CommentReplyBox>
          {replyList.map(comment => (
            <Reply
              key={comment.id}
              content={comment.content}
              nickname={comment.commentMember.nickname}
              userId={comment.commentMember.memberId}
              replyId={comment.id}
              isEdit={isEditReplyId === comment.id}
              setIsEditReplyId={setIsEditReplyId}
            ></Reply>
          ))}
          {isShowInput && <InputBox placeholder="답글을 남겨 주세요." regist={regist} />}
        </CommentReplyBox>
      </CommentBox>
    </CommentLayout>
  );
};

export default Comment;
