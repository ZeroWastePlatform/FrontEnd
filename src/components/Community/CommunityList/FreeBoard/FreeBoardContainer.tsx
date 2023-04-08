import { useState } from "react";
import styled from "styled-components";
import useSortPaging from "../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import CommunityHeaderContainer from "../../Common/CommunityHeader/CommunityHeaderContainer";
import FreeBoard from "./FreeBoard";

const FreeBoardContainer = () => {
  const { page, sort, changePage, changeSort } = useSortPaging(1, "createdAt");

  const { data } = useSuspenseQuery<PostListType>(
    ["Community", "FreeBoard", page, sort],
    `posts/lists/1?page=${page - 1}&orderby=${sort}`,
  );
  console.log(data);

  return (
    <>
      <CommunityHeaderContainer title="자유게시판" changeSort={changeSort} />
      <CommunityListLayout>
        <FreeBoard posts={data.content} />
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

export default FreeBoardContainer;
