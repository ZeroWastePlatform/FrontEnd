import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryNavigation from "../../components/Store/Common/CategoryNavigation/CategoryNavigation";
import ProductCardListContainer from "../../components/Store/ProductList/ProductCardList/ProductCardListContainer";
import ProductFilterBlockContainer from "../../components/Store/ProductList/ProductFilterBlock/ProductFilterBlockContainer";
import { ErrorBoundary } from "react-error-boundary";
import ProductCarouselContainer from "../../components/Common/Carousel/CarouselContainer";

export interface filterType {
  name: string | null;
  value: string;
  text: string;
}
export interface conditionType {
  category: string;
  filter: filterType[];
  sort: string;
  page: number;
}

export type setConditionType = React.Dispatch<conditionType>;

function Store() {
  const [condition, setCondition] = useState<conditionType>({
    category: "전체",
    filter: [],
    sort: "인기순",
    page: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const filterQuery = `&filter=${condition.filter.map(({ text }) => text).join("%")}`;
    navigate(
      `/store?category=${condition.category}${condition.filter.length ? filterQuery : ""}&sort=${condition.sort}&page=${
        condition.page
      }`,
    );
  }, [condition]);
  /*TO-DO : 에러 컴포넌트와 로딩 컴포넌트 제작*/
  return (
    <>
      <CategoryNavigation condition={condition} setCondition={setCondition} />
      {condition.category === "전체" || condition.category === "베스트" ? (
        <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
          <Suspense fallback={<div>...로딩중</div>}>
            <ProductCarouselContainer />
          </Suspense>
        </ErrorBoundary>
      ) : null}
      {condition.category === "전체" || condition.category === "베스트" ? null : (
        <ProductFilterBlockContainer condition={condition} setCondition={setCondition} />
      )}
      <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
        <Suspense fallback={<div style={{ width: "1200px", height: "1908px" }}>...로딩중</div>}>
          <ProductCardListContainer condition={condition} setCondition={setCondition} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Store;
