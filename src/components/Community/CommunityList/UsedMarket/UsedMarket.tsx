import React from "react";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../../../types";
import {
  UsedMarketContent,
  UsedMarketContentCategory,
  UsedMarketContentImg,
  UsedMarketContentPrice,
  UsedMarketContentTitle,
  UsedMarketContentTitleBox,
  UsedMarketLayout,
} from "./UsedMarket.styles";

interface UsedMarketProps {
  posts: PostType[];
}

const UsedMarket = ({ posts }: UsedMarketProps) => {
  const navigate = useNavigate();
  return (
    <UsedMarketLayout>
      {posts.map(post => (
        <UsedMarketContent key={post.id} onClick={() => navigate(`/community/article/${post.id}`)}>
          <UsedMarketContentImg />
          <UsedMarketContentTitleBox>
            <UsedMarketContentTitle>{post.title}</UsedMarketContentTitle>
            <UsedMarketContentCategory>생활/주방</UsedMarketContentCategory>
          </UsedMarketContentTitleBox>
          <UsedMarketContentPrice>{post.price}</UsedMarketContentPrice>
        </UsedMarketContent>
      ))}
    </UsedMarketLayout>
  );
};

export default UsedMarket;
