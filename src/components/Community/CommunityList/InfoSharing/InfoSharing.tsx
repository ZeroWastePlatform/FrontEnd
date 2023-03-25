import React from "react";
import { PostType } from "../../../../types";
import Post from "../../Common/Post/Post";
import { InfoSharingLayout } from "./InfoSharing.styles";

interface InfoSharingProps {
  posts: PostType[];
}

const InfoSharing = ({ posts }: InfoSharingProps) => {
  return (
    <InfoSharingLayout>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          kind={post.kind}
          title={post.title}
          content={post.content}
          viewCnt={post.viewCnt}
          replyCnt={post.replyCnt}
          recommendCnt={post.recommendCnt}
          createdAt={post.createdAt}
          hashtags={post.hashtags}
        />
      ))}
    </InfoSharingLayout>
  );
};

export default InfoSharing;
