import React from "react";
import {
  DailyPopularPostLayout,
  DailyPopularPosts,
  DailyPopularPostSubTitle,
  DailyPopularPostTitle,
  DailyPopularPostTitleBox,
} from "./DailyPopularPost.styles";
import Post from "./Post/Post";

const DailyPopularPost = () => {
  return (
    <DailyPopularPostLayout>
      <DailyPopularPostTitleBox>
        <DailyPopularPostTitle>오늘의 그리너스 인기글</DailyPopularPostTitle>
        <DailyPopularPostSubTitle>더보기</DailyPopularPostSubTitle>
      </DailyPopularPostTitleBox>
      <DailyPopularPosts>
        <Post />
        <Post />
        <Post />
      </DailyPopularPosts>
    </DailyPopularPostLayout>
  );
};

export default DailyPopularPost;
