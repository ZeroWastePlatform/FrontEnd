import React from "react";
import { useParams } from "react-router-dom";
import CommunityHeader from "./CommunityHeader";

interface CommunityHeaderContainerProps {
  title: string;
}

const CommunityHeaderContainer = ({ title }: CommunityHeaderContainerProps) => {
  const { type } = useParams();

  const getCategoryList = () => {
    if (type === "market") {
      return ["전체", "생활/주방", "뷰티/미용", "디지털기기", "잡화/의류", "기타 중고물품"];
    }
    if (type === "sharing") {
      return ["전체", "제로웨이스트", "비건맛집", "비건카페", "플라스틱프리", "용기내챌린지", "대체육"];
    }
    return null;
  };

  return <CommunityHeader title={title} categoryList={getCategoryList()} />;
};

export default CommunityHeaderContainer;
