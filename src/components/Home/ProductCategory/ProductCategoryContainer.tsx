import React from "react";
import { getCategoryList } from "../../../utils/getCategoryList";
import ProductCategory from "./ProductCategory";

const ProductCategoryContainer = () => {
  const categoryList = getCategoryList();
  return <ProductCategory categoryList={categoryList} />;
};

export default ProductCategoryContainer;
