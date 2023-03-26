import React from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import Pagenation from "../../../Common/Pagenation/Pagenation";
import InfoSharing from "./InfoSharing";

const InfoSharingContainer = () => {
  const { data } = useSuspenseQuery<PostListType>(["Community", "InfoSharing"], "posts/lists/3");

  return (
    <>
      <InfoSharing posts={data.content} />
      <Pagenation page={1} pageList={[]} movePage={1} />
    </>
  );
};

export default InfoSharingContainer;
