import React from "react";
import { useParams } from "react-router-dom";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import CommunityHeader from "./CommunityHeader";

interface CommunityHeaderContainerProps {
  title: string;
}

const CommunityHeaderContainer = ({ title }: CommunityHeaderContainerProps) => {
  const { type } = useParams();

  const { data } = useSuspenseQuery<{ hashtags: string[] }>(["Community", "popularHashtags"], "hashtags/popularity");

  const getCategoryList = () => {
    if (type === "market") {
      return ["전체", "생활/주방", "뷰티/미용", "디지털기기", "잡화/의류", "기타 중고물품"];
    }
    if (type === "sharing") {
      return ["전체", "제로웨이스트", "비건맛집", "비건카페", "플라스틱프리", "용기내챌린지", "대체육"];
    }
    return null;
  };

  return <CommunityHeader title={title} categoryList={getCategoryList()} popularHashtags={data.hashtags} />;
};

export default CommunityHeaderContainer;
