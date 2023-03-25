import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../../../atom/userInfo";
import {
  ReplyActions,
  ReplyBox,
  ReplyButton,
  ReplyContent,
  ReplyEditBtns,
  ReplyEditInput,
  ReplyLayout,
  ReplyUserName,
  ReplyUserProfile,
  ReplyUserProfileBox,
} from "./Reply.styles";

interface ReplyProps {
  content: string;
  nickname: string;
  userId: number;
  replyId: number;
  isEdit: boolean;
  setIsEditReplyId: React.Dispatch<React.SetStateAction<number>>;
}

const Reply = ({ content, nickname, userId, replyId, isEdit, setIsEditReplyId }: ReplyProps) => {
  const userInfo = useRecoilValue(userInfoAtom);
  const [editContent, setEditContent] = useState(content);
  return (
    <ReplyLayout>
      <ReplyUserProfileBox>
        <ReplyUserProfile />
      </ReplyUserProfileBox>
      <ReplyBox>
        <ReplyUserName>{nickname}</ReplyUserName>
        {isEdit ? (
          <ReplyEditInput defaultValue={content} onChange={e => setEditContent(e.target.value)} />
        ) : (
          <ReplyContent>{content}</ReplyContent>
        )}

        {isEdit ? (
          <ReplyEditBtns>
            <ReplyButton>확인</ReplyButton>
            <ReplyButton onClick={() => setIsEditReplyId(0)}>취소</ReplyButton>
          </ReplyEditBtns>
        ) : (
          userInfo.id === userId && (
            <ReplyActions>
              <ReplyButton onClick={() => setIsEditReplyId(replyId)}>수정</ReplyButton>
              <ReplyButton>삭제</ReplyButton>
            </ReplyActions>
          )
        )}
      </ReplyBox>
    </ReplyLayout>
  );
};

export default Reply;
