import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AskContainer from "./Ask/AskContainer";
import DeliveryContainer from "./Delivery/DeliveryContainer";
import { DetailLayout } from "./Detail.styles";
import InfoContainer from "./Info/InfoContainer";
import InfoNavigationContainer from "./InfoNavigation/InfoNavigationContainer";
import RecommendContainer from "./Recommend/RecommendContainer";
import ReviewContainer from "./Review/ReviewContainer";

interface DetailProps {
  refs: {
    [index: string]: React.RefObject<HTMLDivElement>;
  };
  navigate: (type: string) => void;
  navigation: string;
}

const Detail = ({ refs, navigate, navigation }: DetailProps) => {
  return (
    <DetailLayout>
      <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
        <Suspense fallback={<div>...로딩중</div>}>
          <InfoNavigationContainer navigate={navigate} navigation={navigation} />
          <InfoContainer infoRef={refs.info} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
        <Suspense fallback={<div>...로딩중</div>}>
          <ReviewContainer reviewRef={refs.review} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
        <Suspense fallback={<div>...로딩중</div>}>
          <DeliveryContainer deliveryRef={refs.delivery} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
        <Suspense fallback={<div>...로딩중</div>}>
          <AskContainer askRef={refs.ask} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={() => <div>...에러발생</div>}>
        <Suspense fallback={<div>...로딩중</div>}>
          <RecommendContainer recommendRef={refs.recommend} />
        </Suspense>
      </ErrorBoundary>
    </DetailLayout>
  );
};

export default Detail;
