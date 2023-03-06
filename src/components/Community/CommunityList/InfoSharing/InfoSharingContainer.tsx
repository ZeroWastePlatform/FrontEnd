import React from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import InfoSharing from "./InfoSharing";

const InfoSharingContainer = () => {
  const { data } = useSuspenseQuery<PostListType>(["Community", "FreeBoard"], "posts/lists/3");
  console.log(data);
  return <InfoSharing posts={data.content} />;
};

export default InfoSharingContainer;
