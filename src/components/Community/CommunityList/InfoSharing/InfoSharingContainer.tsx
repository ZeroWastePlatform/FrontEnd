import React, { useState } from "react";
import styled from "styled-components";
import useSortPaging from "../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import CommunityHeaderContainer from "../../Common/CommunityHeader/CommunityHeaderContainer";
import InfoSharing from "./InfoSharing";

const InfoSharingContainer = () => {
  const { page, sort, changePage, changeSort } = useSortPaging(1, "createdAt");

  const { data } = useSuspenseQuery<PostListType>(
    ["Community", "InfoSharing", page, sort],
    `posts/lists/3?page=${page - 1}&orderby=${sort}`,
  );
  console.log(data);

  return (
    <>
      <CommunityHeaderContainer title="정보공유" changeSort={changeSort} />
      <CommunityListLayout>
        <InfoSharing posts={data.content} />
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

export default InfoSharingContainer;
