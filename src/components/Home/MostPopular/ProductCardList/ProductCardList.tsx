import React from "react";
import ProductCardItem from "./ProductCardItem/ProductCardItem";
import { ProductCardListLayout } from "./ProductCardList.styles";

const ProductCardList = () => {
  return (
    <ProductCardListLayout>
      <ProductCardItem />
      <ProductCardItem />
      <ProductCardItem />
    </ProductCardListLayout>
  );
};

export default ProductCardList;
