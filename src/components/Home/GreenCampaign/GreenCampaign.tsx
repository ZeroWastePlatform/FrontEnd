import React from "react";
import Header from "../Common/Header/Header";
import {
  GreenCampaignContent,
  GreenCampaignContentBox,
  GreenCampaignImg,
  GreenCampaignLayout,
  GreenCampaignText,
  GreenCampaignTextBox,
  GreenCampaignTitle,
} from "./GreenCampaign.styles";

const GreenCampaign = () => {
  return (
    <GreenCampaignLayout>
      <Header title="그리너스랑 함께 실천해요" subTitle="더보기" />
      <GreenCampaignContentBox>
        <GreenCampaignContent>
          <GreenCampaignImg />
          <GreenCampaignTextBox>
            <GreenCampaignTitle>비건</GreenCampaignTitle>
            <GreenCampaignText>쉽게 시작하는 비건요리</GreenCampaignText>
          </GreenCampaignTextBox>
        </GreenCampaignContent>
        <GreenCampaignContent>
          <GreenCampaignImg />
          <GreenCampaignTextBox>
            <GreenCampaignTitle>비건</GreenCampaignTitle>
            <GreenCampaignText>쉽게 시작하는 비건요리</GreenCampaignText>
          </GreenCampaignTextBox>
        </GreenCampaignContent>
        <GreenCampaignContent>
          <GreenCampaignImg />
          <GreenCampaignTextBox>
            <GreenCampaignTitle>비건</GreenCampaignTitle>
            <GreenCampaignText>쉽게 시작하는 비건요리</GreenCampaignText>
          </GreenCampaignTextBox>
        </GreenCampaignContent>
      </GreenCampaignContentBox>
    </GreenCampaignLayout>
  );
};

export default GreenCampaign;
