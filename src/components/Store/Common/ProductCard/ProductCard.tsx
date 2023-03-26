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
  order: number;
  liked: boolean;
  changeLike: (productId: number) => Promise<void>;
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
  thumbnail,
  liked,
  changeLike,
}: ProductCardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ProductCardLayout>
        <ProductCardCol to={`/store/product/${id}`} state={{ category }}>
          <ProductCardImgBox>
            {order ? <ProductRankImg src={flagImg} /> : null}
            {order ? <ProductRank>{order}</ProductRank> : null}
            <ProductCardImg src={`https://zerowasteproduct.herokuapp.com${thumbnail}`} />
            <ProdcutCardLikeIcon
              onClick={e => {
                e.preventDefault();
                changeLike(id);
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
              {badges
                .toString(2)
                .split("")
                .map((bool, index) => {
                  if (bool === "1") return badgeList[index];
                  return "false";
                })
                .filter(el => el !== "false")
                .map(badge => (
                  <ProductCardBadgeItem key={badge} type={badge}>
                    {badge}
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

const badgeList = ["BEST", "NEW", "SALE"];
