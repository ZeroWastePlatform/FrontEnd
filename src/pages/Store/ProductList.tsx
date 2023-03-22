import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CategoryNavigation from "../../components/Store/Common/CategoryNavigation/CategoryNavigation";
import ProductCardListContainer from "../../components/Store/ProductList/ProductCardList/ProductCardListContainer";
import ProductFilterBlockContainer from "../../components/Store/ProductList/ProductFilterBlock/ProductFilterBlockContainer";
import { ErrorBoundary } from "react-error-boundary";
import ProductCarouselContainer from "../../components/Common/Carousel/CarouselContainer";
import makeQuery from "../../utils/makeQuery";

export type category = "FOOD" | "KITCHEN" | "BATH" | "LIFE" | "HOBBY" | "GIFT" | "WOMAN" | "PET" | "STATIONERY";
type price = "LT_10" | "BT_10_30" | "BT_30_50" | "GT_50";
type sort = "POPULARITY" | "NEW" | "LOW_PRICE" | "HIGH_PRICE";
type status = "FREE_SHIPPING" | "DISCOUNT_STOCK" | "REMOVE_OUT_OF_STOCK";
export interface conditionType {
  category: category | "ALL" | "TOP6" | null;
  brand: string | null;
  price: price | null;
  productStatus: status | null;
  sort: sort | category | "TOP6";
  page: number;
}

export type setConditionType = React.Dispatch<conditionType>;

function Store() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("category");

  const [condition, setCondition] = useState<conditionType>({
    category: query ? (query as category) : "ALL",
    brand: null,
    price: null,
    productStatus: null,
    sort: "POPULARITY",
    page: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fixQuery = (condition: conditionType) => {
      const newCondition = { ...condition };
      if (condition.category === "ALL") {
        newCondition.category = null;
      }
      if (condition.category === "TOP6") {
        newCondition.category = newCondition.sort as category;
        newCondition.sort = "TOP6";
      }
      return newCondition;
    };
    const query = makeQuery(fixQuery(condition));
    navigate(`/store?${query}`);
  }, [condition]);

  return (
    <>
      <CategoryNavigation condition={condition} setCondition={setCondition} />
      {condition.category === "ALL" || condition.category === "TOP6" ? null : (
        <ProductFilterBlockContainer condition={condition} setCondition={setCondition} />
      )}
      <ErrorBoundary FallbackComponent={() => <div style={exceptCaseStyle}>에러발생</div>}>
        <Suspense fallback={<div style={exceptCaseStyle}>로딩중</div>}>
          {condition.category === "ALL" || condition.category === "TOP6" ? (
            <ProductCarouselContainer type="Store" />
          ) : null}
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
