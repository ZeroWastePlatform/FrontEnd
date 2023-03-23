import ProductCategoryContainer from "../components/Home/ProductCategory/ProductCategoryContainer";
import MostPopularContainer from "../components/Home/MostPopular/MostPopularContainer";
import BestGreenusContainer from "../components/Home/BestGreenus/BestGreenusContainer";
import DailyPopularPostContainer from "../components/Home/DailyPopularPost/DailyPopularPostContainer";
import GreenCampaignContainer from "../components/Home/GreenCampaign/GreenCampaignContainer";
import ProductCarouselContainer from "../components/Common/Carousel/CarouselContainer";

function Home() {
  return (
    <>
      <ProductCarouselContainer type={"Home"} />
      <ProductCategoryContainer />
      <MostPopularContainer />
      {/* <BestGreenusContainer />
      <DailyPopularPostContainer />
      <GreenCampaignContainer /> */}
    </>
  );
}

export default Home;
