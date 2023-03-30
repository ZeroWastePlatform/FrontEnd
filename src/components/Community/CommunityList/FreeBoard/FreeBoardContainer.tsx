import { useState } from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import FreeBoard from "./FreeBoard";

const FreeBoardContainer = () => {
  const [page, setPage] = useState(1);

  const { data } = useSuspenseQuery<PostListType>(["Community", "FreeBoard"], `posts/lists/1?page=${page}`);
  console.log(data);

  return (
    <>
      <FreeBoard posts={data.content} />
      <PagenationContainer page={page} setPage={setPage} totalPage={data.totalPages} unit={6} />
    </>
  );
};

export default FreeBoardContainer;
