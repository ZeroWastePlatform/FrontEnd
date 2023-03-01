import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import CategoryNavigation from "../../components/Store/Common/CategoryNavigation/CategoryNavigation";
import DetailContainer from "../../components/Store/ProductDetail/Detail/DetailContainer";
import SummaryContainer from "../../components/Store/ProductDetail/Summary/SummaryContainer";
import { conditionType } from "./ProductList";

const ProductDetail = () => {
  const location = useLocation();
  const [condition, setCondition] = useState<{ category?: string }>({ category: location.state?.category });
  /*TO-DO : 에러 컴포넌트와 로딩 컴포넌트 제작*/
  return (
    <main>
      <CategoryNavigation condition={condition as conditionType} setCondition={() => null} />
      <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
        <Suspense fallback={<div>...로딩중</div>}>
          <SummaryContainer setCondition={setCondition} />
        </Suspense>
      </ErrorBoundary>
      <DetailContainer />
    </main>
  );
};

export default ProductDetail;
