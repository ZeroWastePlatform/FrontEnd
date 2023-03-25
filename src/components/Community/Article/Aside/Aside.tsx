import React from "react";
import { PopularityPostType, RecommendationsPostType } from "../../../../types";
import {
  AsideLayout,
  AsidePopularBox,
  AsidePopularLiked,
  AsidePopularPost,
  AsidePopularSubject,
  AsideRecommendationBody,
  AsideRecommendationBox,
  AsideRecommendationPost,
  AsideRecommendationSubject,
  AsideTitle,
} from "./Aside.styles";

interface AsideProps {
  recommendations: RecommendationsPostType[];
  popularity: PopularityPostType[];
}

const Aside = ({ recommendations, popularity }: AsideProps) => {
  return (
    <AsideLayout>
      <AsideRecommendationBox>
        <AsideTitle>자유게시판 추천글</AsideTitle>
        {recommendations?.map(post => (
          <AsideRecommendationPost key={post.id}>
            <AsideRecommendationSubject>{post.title}</AsideRecommendationSubject>
            <AsideRecommendationBody>{post.content}</AsideRecommendationBody>
          </AsideRecommendationPost>
        ))}
      </AsideRecommendationBox>
      <AsidePopularBox>
        <AsideTitle>오늘의 그리너스 인기글</AsideTitle>
        {popularity?.map(post => (
          <AsidePopularPost key={post.id}>
            <AsidePopularSubject>{post.title}</AsidePopularSubject>
            <AsidePopularLiked>{post.recommendCnt}</AsidePopularLiked>
          </AsidePopularPost>
        ))}
      </AsidePopularBox>
    </AsideLayout>
  );
};

export default Aside;
