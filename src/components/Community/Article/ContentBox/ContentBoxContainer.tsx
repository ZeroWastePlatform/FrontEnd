import React from "react";
import ContentBox from "./ContentBox";
import { PostType } from "../../../../types/index";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import customAPI from "../../../../lib/customAPI";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

interface ContentBoxContainerProps {
  post: PostType;
}

const ContentBoxContainer = ({ post }: ContentBoxContainerProps) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: deletePost } = useSetQueryMutate(
    postId => customAPI.delete(`posts/${postId}`),
    ["Community", "market"],
    e => {
      queryClient.invalidateQueries(["Community"]);
      navigate(-1);
    },
  );

  const { mutate: toggleLike } = useSetQueryMutate(postId => customAPI.post(`posts/recommendations/${postId}`));

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
      serverFileUrls={post.serverFileUrls}
      handleDeletePost={handleDeletePost}
      toggleLike={toggleLike}
    />
  );
};

export default ContentBoxContainer;
