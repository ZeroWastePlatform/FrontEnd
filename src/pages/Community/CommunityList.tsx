import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pagenation from "../../components/Common/Pagenation/Pagenation";
import CommunityHeaderContainer from "../../components/Community/Common/CommunityHeader/CommunityHeaderContainer";
import FreeBoardContainer from "../../components/Community/CommunityList/FreeBoard/FreeBoardContainer";
import InfoSharingContainer from "../../components/Community/CommunityList/InfoSharing/InfoSharingContainer";
import UsedMarketContainer from "../../components/Community/CommunityList/UsedMarket/UsedMarketContainer";

const CommunityList = () => {
  const { type } = useParams();

  const outputChildren = () => {
    switch (type) {
      case "board":
        return {
          component: <FreeBoardContainer />,
        };
      case "market":
        return {
          component: <UsedMarketContainer />,
        };
      case "sharing":
        return {
          component: <InfoSharingContainer />,
        };
    }
    return {
      title: "error",
      component: <div>error</div>,
    };
  };

  return (
    <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
      <Suspense fallback={<div>...로딩중</div>}>{outputChildren().component}</Suspense>
    </ErrorBoundary>
  );
};

export default CommunityList;
