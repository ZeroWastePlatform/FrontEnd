import React, { useState } from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import UsedMarket from "./UsedMarket";

const UsedMarketContainer = () => {
  const [page, setPage] = useState(1);

  const { data } = useSuspenseQuery<PostListType>(["Community", "UsedMarket"], `posts/lists/2?page=${page}`);
  console.log(data);
  return (
    <>
      <UsedMarket posts={data.content} />
      <PagenationContainer page={page} setPage={setPage} totalPage={data.totalPages} unit={6} />
    </>
  );
};

export default UsedMarketContainer;
