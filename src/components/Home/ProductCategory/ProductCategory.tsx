import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import {
  ProductCategoryLayout,
  ProductCategoryList,
  ProductCategoryTitle,
  ProductCategoryTitleBox,
} from "./ProductCategory.styles";
import { ICategoryList } from "../../../types/index";

interface ProductCategoryProps {
  categoryList: ICategoryList[];
}

const ProductCategory = ({ categoryList }: ProductCategoryProps) => {
  return (
    <ProductCategoryLayout>
      <ProductCategoryTitleBox>
        <ProductCategoryTitle>제품 카테고리</ProductCategoryTitle>
      </ProductCategoryTitleBox>
      <ProductCategoryList>
        {categoryList.map((item, idx) => (
          <CategoryItem key={idx} category={item} />
        ))}
      </ProductCategoryList>
    </ProductCategoryLayout>
  );
};

export default ProductCategory;
