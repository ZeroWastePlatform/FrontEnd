import { useState } from "react";
import useSortPaging from "../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import FreeBoard from "./FreeBoard";

const FreeBoardContainer = () => {
  const { page, sort, changePage, changeSort } = useSortPaging(1, "최신순");

  const { data } = useSuspenseQuery<PostListType>(["Community", "FreeBoard", page], `posts/lists/1?page=${page}`);
  console.log(data);

  return (
    <>
      <FreeBoard posts={data.content} />
      <PagenationContainer page={page} changePage={changePage} totalPage={data.totalPages} unit={6} />
    </>
  );
};

export default FreeBoardContainer;
