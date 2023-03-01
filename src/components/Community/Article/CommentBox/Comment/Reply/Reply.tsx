import React from "react";
import {
  ReplyBox,
  ReplyContent,
  ReplyLayout,
  ReplyUserName,
  ReplyUserProfile,
  ReplyUserProfileBox,
} from "./Reply.styles";

const Reply = () => {
  return (
    <ReplyLayout>
      <ReplyUserProfileBox>
        <ReplyUserProfile />
      </ReplyUserProfileBox>
      <ReplyBox>
        <ReplyUserName>dngur9801</ReplyUserName>
        <ReplyContent>
          내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ내용ㅁㅇㄹㅁㅇ
        </ReplyContent>
      </ReplyBox>
    </ReplyLayout>
  );
};

export default Reply;
