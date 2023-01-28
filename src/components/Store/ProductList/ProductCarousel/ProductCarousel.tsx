import {
  ProductCarouselButton,
  ProductCarouselImg,
  ProductCarouselImgBox,
  ProductCarouselLayout,
} from "./ProductCarousel.styles";

interface ProductCarouselProps {
  data: string[];
  order: number;
  movePrevOrder: () => void;
  moveNextOrder: () => void;
}

const ProductCarousel = ({ data, order, movePrevOrder, moveNextOrder }: ProductCarouselProps) => {
  return (
    <ProductCarouselLayout>
      <ProductCarouselImgBox>
        <ProductCarouselButton direction={"left"} onClick={movePrevOrder}>
          &lt;
        </ProductCarouselButton>
        <ProductCarouselImg src={data[order]} />
        <ProductCarouselButton direction={"right"} onClick={moveNextOrder}>
          &gt;
        </ProductCarouselButton>
      </ProductCarouselImgBox>
    </ProductCarouselLayout>
  );
};

export default ProductCarousel;
