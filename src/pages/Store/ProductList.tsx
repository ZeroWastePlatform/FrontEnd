import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const query = searchParams.get("category");

  const [condition, setCondition] = useState<conditionType>({
    category: query ? query : "전체",
    filter: [],
    sort: "인기순",
    page: 1,
  });
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const filterQuery = `&filter=${condition.filter.map(({ text }) => text).join("%")}`;
    navigate(
      `/store?category=${condition.category}${condition.filter.length ? filterQuery : ""}&sort=${condition.sort}&page=${
        condition.page
      }`,
    );
  }, [condition]);
  return (
    <>
      <CategoryNavigation condition={condition} setCondition={setCondition} />
      <ErrorBoundary FallbackComponent={() => <div style={exceptCaseStyle}>에러발생</div>}>
        <Suspense fallback={<div style={exceptCaseStyle}>로딩중</div>}>
          {condition.category === "전체" || condition.category === "베스트" ? (
            <ProductCarouselContainer type="Store" />
          ) : (
            <ProductFilterBlockContainer condition={condition} setCondition={setCondition} />
          )}
          <ProductCardListContainer condition={condition} setCondition={setCondition} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Store;

const exceptCaseStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
  fontWeight: "600",
};
