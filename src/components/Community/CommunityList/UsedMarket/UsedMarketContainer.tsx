import React, { useState } from "react";
import useSortPaging from "../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import UsedMarket from "./UsedMarket";

const UsedMarketContainer = () => {
  const { page, sort, changePage, changeSort } = useSortPaging(1, "최신순");

  const { data } = useSuspenseQuery<PostListType>(["Community", "UsedMarket", page], `posts/lists/2?page=${page}`);
  console.log(data);

  return (
    <>
      <UsedMarket posts={data.content} />
      <PagenationContainer page={page} changePage={changePage} totalPage={data.totalPages} unit={6} />
    </>
  );
};

export default UsedMarketContainer;
