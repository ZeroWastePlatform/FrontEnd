import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import {
  ProductCardLayout,
  ProductCardImg,
  ProductCardCol,
  ProductCardInfoList,
  ProductCardBadgeList,
  ProductCardBadgeItem,
  ProductCardImgBox,
  ProductCardBrand,
  ProductCardTitle,
  ProductCardPriceBox,
  ProductCardDiscountRate,
  ProductCardPrice,
  ProdcutCardLikeIcon,
} from "./ProductCard.styles";

export interface ProductCardProps {
  id: number;
  brand: string;
  title: string;
  discountRate: string;
  price: string;
  badges: string[];
  liked: boolean;
  category: string;
  changeLiked: UseMutateFunction<AxiosResponse<unknown, unknown>, unknown, unknown, unknown>;
}

const ProductCard = ({
  category,
  id,
  brand,
  title,
  discountRate,
  price,
  badges,
  liked,
  changeLiked,
}: ProductCardProps) => {
  return (
    <ProductCardLayout>
      <ProductCardCol to={`/store/product/${id}`} state={{ category }}>
        <ProductCardImgBox>
          <ProductCardImg />
          <ProdcutCardLikeIcon
            onClick={e => {
              e.preventDefault();
              changeLiked(id);
            }}
          >
            {liked ? "♥" : "♡"}
          </ProdcutCardLikeIcon>
        </ProductCardImgBox>
        <ProductCardInfoList>
          <ProductCardBrand>{brand}</ProductCardBrand>
          <ProductCardTitle>{title}</ProductCardTitle>
          <ProductCardPriceBox>
            <ProductCardDiscountRate>{discountRate}%</ProductCardDiscountRate>
            <ProductCardPrice>{price}원</ProductCardPrice>
          </ProductCardPriceBox>
          <ProductCardBadgeList>
            {badges.map(badge => (
              <ProductCardBadgeItem key={badge}>{badge}</ProductCardBadgeItem>
            ))}
          </ProductCardBadgeList>
        </ProductCardInfoList>
      </ProductCardCol>
    </ProductCardLayout>
  );
};

export default ProductCard;
