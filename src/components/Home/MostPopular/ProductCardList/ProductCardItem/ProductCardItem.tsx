import React from "react";
import {
  ProductCardItemImg,
  ProductCardItemLayout,
  ProductCardItemPrice,
  ProductCardItemState,
  ProductCardItemStateBox,
  ProductCardItemTitle,
} from "./ProductCardItem.styles";

const ProductCardItem = () => {
  return (
    <ProductCardItemLayout>
      <ProductCardItemImg />
      <ProductCardItemTitle>[그리너스] 마일드 고체치약 30정입</ProductCardItemTitle>
      <ProductCardItemPrice>5,900원</ProductCardItemPrice>
      <ProductCardItemStateBox>
        <ProductCardItemState>NEW</ProductCardItemState>
        <ProductCardItemState>BEST</ProductCardItemState>
        <ProductCardItemState>SALE</ProductCardItemState>
      </ProductCardItemStateBox>
    </ProductCardItemLayout>
  );
};

export default ProductCardItem;
