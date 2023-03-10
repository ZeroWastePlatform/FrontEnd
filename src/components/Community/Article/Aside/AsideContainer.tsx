import React from "react";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PopularityPostType, RecommendationsPostType } from "../../../../types";
import Aside from "./Aside";

interface AsideContainerProps {
  kind: number;
}

const AsideContainer = ({ kind }: AsideContainerProps) => {
  const { data: recommendations } = useSuspenseQuery<RecommendationsPostType[]>(
    ["Community", "Article", "Aside", "recommendations"],
    `posts/recommendations/${kind}`,
  );
  const { data: popularity } = useSuspenseQuery<PopularityPostType[]>(
    ["Community", "Article", "Aside", "popularity"],
    `posts/popularity`,
  );
  return <Aside recommendations={recommendations} popularity={popularity} />;
};

export default AsideContainer;
