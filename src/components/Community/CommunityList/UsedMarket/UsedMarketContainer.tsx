import React from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import UsedMarket from "./UsedMarket";

const UsedMarketContainer = () => {
  const { data } = useSuspenseQuery<PostListType>(["Community", "FreeBoard"], "posts/lists/2");
  console.log(data);
  return <UsedMarket posts={data.content} />;
};

export default UsedMarketContainer;
