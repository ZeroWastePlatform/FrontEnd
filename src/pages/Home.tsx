import CarouselContainer from "../components/Home/Carousel/CarouselContainer";
import ProductCategoryContainer from "../components/Home/ProductCategory/ProductCategoryContainer";
import MostPopularContainer from "../components/Home/MostPopular/MostPopularContainer";
import BestGreenusContainer from "../components/Home/BestGreenus/BestGreenusContainer";

function Home() {
  return (
    <>
      <CarouselContainer />
      <ProductCategoryContainer />
      <MostPopularContainer />
      <BestGreenusContainer />
    </>
  );
}

export default Home;
