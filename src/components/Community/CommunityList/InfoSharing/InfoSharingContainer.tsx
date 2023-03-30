import React, { useState } from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import InfoSharing from "./InfoSharing";

const InfoSharingContainer = () => {
  const [page, setPage] = useState(1);

  const { data } = useSuspenseQuery<PostListType>(["Community", "InfoSharing"], `posts/lists/3?page=${page}`);
  console.log(data);
  return (
    <>
      <InfoSharing posts={data.content} />
      <PagenationContainer page={page} setPage={setPage} totalPage={data.totalPages} unit={6} />
    </>
  );
};

export default InfoSharingContainer;
