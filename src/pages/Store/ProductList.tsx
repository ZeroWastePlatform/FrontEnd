import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CategoryNavigation from "../../components/Store/Common/CategoryNavigation/CategoryNavigation";
import ProductCardListContainer from "../../components/Store/ProductList/ProductCardList/ProductCardListContainer";
import ProductFilterBlockContainer from "../../components/Store/ProductList/ProductFilterBlock/ProductFilterBlockContainer";
import { ErrorBoundary } from "react-error-boundary";
import ProductCarouselContainer from "../../components/Common/Carousel/CarouselContainer";
import makeQuery from "../../utils/makeQuery";
import fixProductCondition from "../../utils/fixProductCondition";

export type category = "FOOD" | "KITCHEN" | "BATH" | "LIFE" | "HOBBY" | "GIFT" | "WOMAN" | "PET" | "STATIONERY";
type price = "LT_10" | "BT_10_30" | "BT_30_50" | "GT_50";
type sort = "POPULARITY" | "NEW" | "LOW_PRICE" | "HIGH_PRICE";
type status = "FREE_SHIPPING" | "DISCOUNT_STOCK" | "REMOVE_OUT_OF_STOCK";
export interface conditionType {
  [key: string]: string | null | number;
  category: category | "ALL" | "TOP6" | null;
  brand: string | null;
  price: price | null;
  productStatus: status | null;
  order: sort | category | "TOP6";
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
    const query = makeQuery(fixProductCondition(condition));
    navigate(`/store${query}`);
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
