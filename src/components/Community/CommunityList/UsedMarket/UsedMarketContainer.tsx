import React from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import Pagenation from "../../../Common/Pagenation/Pagenation";
import UsedMarket from "./UsedMarket";

const UsedMarketContainer = () => {
  const { data } = useSuspenseQuery<PostListType>(["Community", "FreeBoard", "UsedMarket"], "posts/lists/2");
  console.log(data);
  return (
    <>
      <UsedMarket posts={data.content} />
      <Pagenation page={1} pageList={[]} movePage={1} />
    </>
  );
};

export default UsedMarketContainer;
