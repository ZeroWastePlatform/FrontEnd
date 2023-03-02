import useSuspenseQuery from "../../../hooks/useSuspenseQuery";
import ProductCarousel from "./Carousel";
import useProductCarousel from "./CarouselHook";

const ProductCarouselContainer = () => {
  const { data } = useSuspenseQuery<string[]>(["Store", "productList", "productCarousel"], "productcarousel");
  const { order, changeOrder, stopTransition, checkActiveItem, setOrder } = useProductCarousel(data.length);
  return (
    <ProductCarousel
      data={data}
      order={order}
      stopTransition={stopTransition}
      changeOrder={changeOrder}
      checkActiveItem={checkActiveItem}
      setOrder={setOrder}
      type={"Store"}
    />
  );
};

export default ProductCarouselContainer;
