import ProductCategoryContainer from "../components/Home/ProductCategory/ProductCategoryContainer";
import MostPopularContainer from "../components/Home/MostPopular/MostPopularContainer";
import BestGreenusContainer from "../components/Home/BestGreenus/BestGreenusContainer";
import DailyPopularPostContainer from "../components/Home/DailyPopularPost/DailyPopularPostContainer";
import GreenCampaignContainer from "../components/Home/GreenCampaign/GreenCampaignContainer";
import ProductCarouselContainer from "../components/Common/Carousel/CarouselContainer";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function Home() {
  return (
    <>
      <ProductCarouselContainer type={"Home"} />
      <ProductCategoryContainer />
      <ErrorBoundary FallbackComponent={() => <div>에러발생</div>}>
        <Suspense fallback={<div>로딩중</div>}>
          <MostPopularContainer />
        </Suspense>
      </ErrorBoundary>

      {/* <BestGreenusContainer />
      <DailyPopularPostContainer />
      <GreenCampaignContainer /> */}
    </>
  );
}

export default Home;
