import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { ProductCardListDataContentType } from "../../ProductList/ProductCardList/ProductCardListContainer";
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
  ProductRank,
  ProductCardDiscountPrice,
  ProductRankImg,
} from "./ProductCard.styles";

import { theme } from "../../../../styles/theme";
import { ThemeProvider } from "styled-components";
import { discountPrice, numberWithCommas } from "../../../../utils/priceProcess";
import flagImg from "../../../../assets/images/flag.svg";

export interface ProductCardProps extends ProductCardListDataContentType {
  changeLiked: UseMutateFunction<AxiosResponse<unknown, unknown>, unknown, unknown, unknown>;
  order: number;
}

const ProductCard = ({
  order,
  category,
  id,
  brand,
  title,
  discountRate,
  price,
  badges,
  liked,
  img,
  changeLiked,
}: ProductCardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ProductCardLayout>
        <ProductCardCol to={`/store/product/${id}`} state={{ category }}>
          <ProductCardImgBox>
            {order ? <ProductRankImg src={flagImg} /> : null}
            {order ? <ProductRank>{order}</ProductRank> : null}
            <ProductCardImg src={img} />
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
              {discountRate !== 0 ? <ProductCardDiscountRate>{discountRate}%</ProductCardDiscountRate> : null}
              <ProductCardPrice>{numberWithCommas(discountPrice({ price, discountRate }))}원</ProductCardPrice>
              {discountRate !== 0 ? (
                <ProductCardDiscountPrice>{numberWithCommas(price)}원</ProductCardDiscountPrice>
              ) : null}
            </ProductCardPriceBox>
            <ProductCardBadgeList>
              {badges.map(badge => (
                <ProductCardBadgeItem key={badge} type={badge}>
                  {badge.toUpperCase()}
                </ProductCardBadgeItem>
              ))}
            </ProductCardBadgeList>
          </ProductCardInfoList>
        </ProductCardCol>
      </ProductCardLayout>
    </ThemeProvider>
  );
};

export default ProductCard;
