import React, { useState } from "react";
import styled from "styled-components";
import useSortPaging from "../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import CommunityHeaderContainer from "../../Common/CommunityHeader/CommunityHeaderContainer";
import UsedMarket from "./UsedMarket";

const UsedMarketContainer = () => {
  const { page, sort, changePage, changeSort } = useSortPaging(1, "createdAt");

  const { data } = useSuspenseQuery<PostListType>(
    ["Community", "market", page, sort],
    `posts/lists/2?page=${page - 1}&orderby=${sort}`,
  );
  console.log(data);

  return (
    <>
      <CommunityHeaderContainer title="중고거래" changeSort={changeSort} />
      <CommunityListLayout>
        <UsedMarket posts={data.content} />
        <PagenationContainer page={page} changePage={changePage} totalPage={data.totalPages} unit={6} />
      </CommunityListLayout>
    </>
  );
};

const CommunityListLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 50px;
`;

export default UsedMarketContainer;
