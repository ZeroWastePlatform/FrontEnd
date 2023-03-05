import React from "react";
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

const Aside = () => {
  return (
    <AsideLayout>
      <AsideRecommendationBox>
        <AsideTitle>자유게시판 추천글</AsideTitle>
        <AsideRecommendationPost>
          <AsideRecommendationSubject>게시글 제목이에요</AsideRecommendationSubject>
          <AsideRecommendationBody>본문이 아주 살짝 보여요</AsideRecommendationBody>
        </AsideRecommendationPost>
        <AsideRecommendationPost>
          <AsideRecommendationSubject>게시글 제목이에요</AsideRecommendationSubject>
          <AsideRecommendationBody>본문이 아주 살짝 보여요</AsideRecommendationBody>
        </AsideRecommendationPost>
        <AsideRecommendationPost>
          <AsideRecommendationSubject>게시글 제목이에요</AsideRecommendationSubject>
          <AsideRecommendationBody>본문이 아주 살짝 본문이 아주 살짝 보이다가</AsideRecommendationBody>
        </AsideRecommendationPost>
      </AsideRecommendationBox>
      <AsidePopularBox>
        <AsideTitle>오늘의 그리너스 인기글</AsideTitle>
        <AsidePopularPost>
          <AsidePopularSubject>인기글 제목은 어느정도로 하면 되는</AsidePopularSubject>
          <AsidePopularLiked>23</AsidePopularLiked>
        </AsidePopularPost>
        <AsidePopularPost>
          <AsidePopularSubject>인기글 제목은 어느정도로</AsidePopularSubject>
          <AsidePopularLiked>23</AsidePopularLiked>
        </AsidePopularPost>
        <AsidePopularPost>
          <AsidePopularSubject>인기글 제목은 어느정도로</AsidePopularSubject>
          <AsidePopularLiked>23</AsidePopularLiked>
        </AsidePopularPost>
      </AsidePopularBox>
    </AsideLayout>
  );
};

export default Aside;
