import useSuspenseQuery from "../../../hooks/useSuspenseQuery";
import ProductCarousel from "./Carousel";
import useProductCarousel from "./CarouselHook";

const ProductCarouselContainer = ({ type }: { type: "Store" | "Home" }) => {
  const { data } = useSuspenseQuery<string[]>(["Store", "productList", "productCarousel"], "product/banner");
  const { order, changeOrder, stopTransition, checkActiveItem, setOrder } = useProductCarousel(4);
  return (
    <ProductCarousel
      data={data}
      order={order}
      stopTransition={stopTransition}
      changeOrder={changeOrder}
      checkActiveItem={checkActiveItem}
      setOrder={setOrder}
      type={type}
    />
  );
};

export default ProductCarouselContainer;
