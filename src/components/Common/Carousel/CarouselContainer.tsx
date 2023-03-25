import ProductCarousel from "./Carousel";
import useProductCarousel from "./CarouselHook";

const ProductCarouselContainer = ({ type }: { type: "Store" | "Home" }) => {
  const { order, changeOrder, stopTransition, checkActiveItem, setOrder } = useProductCarousel(4);
  return (
    <ProductCarousel
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
