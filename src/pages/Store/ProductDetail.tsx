import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import CategoryNavigation from "../../components/Store/Common/CategoryNavigation/CategoryNavigation";
import DetailContainer from "../../components/Store/ProductDetail/Detail/DetailContainer";
import SummaryContainer from "../../components/Store/ProductDetail/Summary/SummaryContainer";
import { conditionType } from "./ProductList";

const ProductDetail = () => {
  const location = useLocation();
  const [condition, setCondition] = useState<{ category?: string }>({ category: location.state?.category });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <CategoryNavigation condition={condition as conditionType} setCondition={() => null} />
      <ErrorBoundary FallbackComponent={() => <div style={exceptCaseStyle}>...에러발생</div>}>
        <Suspense fallback={<div style={exceptCaseStyle}>...로딩중</div>}>
          <SummaryContainer setCondition={setCondition} />
        </Suspense>
      </ErrorBoundary>
      <DetailContainer />
    </main>
  );
};

export default ProductDetail;

const exceptCaseStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
  fontWeight: "600",
};
