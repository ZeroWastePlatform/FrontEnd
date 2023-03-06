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
          title: "자유게시판",
          component: <FreeBoardContainer />,
        };
      case "market":
        return {
          title: "중고거래",
          component: <UsedMarketContainer />,
        };
      case "sharing":
        return {
          title: "정보공유",
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
      <Suspense fallback={<div>...로딩중</div>}>
        <CommunityHeaderContainer title={outputChildren().title} />
        <CommunityListLayout>{outputChildren().component}</CommunityListLayout>
        <Pagenation page={1} pageList={[]} movePage={1} />
      </Suspense>
    </ErrorBoundary>
  );
};

const CommunityListLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 50px;
`;

export default CommunityList;
