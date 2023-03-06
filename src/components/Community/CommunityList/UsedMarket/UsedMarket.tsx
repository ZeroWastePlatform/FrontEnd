import React from "react";
import {
  UsedMarketContent,
  UsedMarketContentCategory,
  UsedMarketContentImg,
  UsedMarketContentPrice,
  UsedMarketContentTitle,
  UsedMarketContentTitleBox,
  UsedMarketLayout,
} from "./UsedMarket.styles";

const UsedMarket = () => {
  return (
    <UsedMarketLayout>
      <UsedMarketContent>
        <UsedMarketContentImg />
        <UsedMarketContentTitleBox>
          <UsedMarketContentTitle>에코백 중고로 팔아요</UsedMarketContentTitle>
          <UsedMarketContentCategory>생활/주방</UsedMarketContentCategory>
        </UsedMarketContentTitleBox>
        <UsedMarketContentPrice>9,500원</UsedMarketContentPrice>
      </UsedMarketContent>
    </UsedMarketLayout>
  );
};

export default UsedMarket;
