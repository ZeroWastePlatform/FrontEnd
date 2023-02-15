import CarouselContainer from "../components/Home/Carousel/CarouselContainer";
import ProductCategoryContainer from "../components/Home/ProductCategory/ProductCategoryContainer";
import MostPopularContainer from "../components/Home/MostPopular/MostPopularContainer";
import BestGreenusContainer from "../components/Home/BestGreenus/BestGreenusContainer";
import DailyPopularPostContainer from "../components/Home/DailyPopularPost/DailyPopularPostContainer";

function Home() {
  return (
    <>
      <CarouselContainer />
      <ProductCategoryContainer />
      <MostPopularContainer />
      <BestGreenusContainer />
      <DailyPopularPostContainer />
    </>
  );
}

export default Home;
