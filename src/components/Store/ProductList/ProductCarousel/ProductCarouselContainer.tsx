import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import ProductCarousel from "./ProductCarousel";
import useProductCarousel from "./ProductCarouselHook";

const ProductCarouselContainer = () => {
  const { data } = useSuspenseQuery<string[]>(["Store", "productList", "productCarousel"], "productcarousel");
  const { order, movePrevOrder, moveNextOrder } = useProductCarousel(data.length);

  return <ProductCarousel data={data} order={order} movePrevOrder={movePrevOrder} moveNextOrder={moveNextOrder} />;
};

export default ProductCarouselContainer;
