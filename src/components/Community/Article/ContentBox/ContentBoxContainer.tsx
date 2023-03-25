import React from "react";
import ContentBox from "./ContentBox";
import { PostType } from "../../../../types/index";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import customAPI from "../../../../lib/customApi";

interface ContentBoxContainerProps {
  post: PostType;
}

const ContentBoxContainer = ({ post }: ContentBoxContainerProps) => {
  const { mutate: deletePost } = useSetQueryMutate(postId => customAPI.delete(`posts/${postId}`));

  const { mutate: toggleLike } = useSetQueryMutate(postId => customAPI.delete(`posts/recommendations/${postId}`));

  const handleDeletePost = (postId: number) => {
    if (confirm("게시글을 삭제 하시겠습니까?")) {
      deletePost(postId);
    }
  };

  return (
    <ContentBox
      id={post.id}
      userId={post.postMember.memberId}
      kind={post.kind}
      title={post.title}
      nickname={post.postMember.nickname}
      content={post.content}
      createdAt={post.createdAt}
      replyCnt={post.replyCnt}
      viewCnt={post.viewCnt}
      recommendCnt={post.recommendCnt}
      handleDeletePost={handleDeletePost}
      toggleLike={toggleLike}
    />
  );
};

export default ContentBoxContainer;
