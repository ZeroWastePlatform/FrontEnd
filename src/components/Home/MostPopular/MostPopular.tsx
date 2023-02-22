import React from "react";
import { ICategoryList } from "../../../types";
import Header from "../Common/Header/Header";
import {
  MostPopularCategoryAnchor,
  MostPopularCategoryItem,
  MostPopularCategoryList,
  MostPopularLayout,
} from "./MostPopular.styles";
import ProductCardList from "./ProductCardList/ProductCardList";

interface MostPopularProps {
  categoryList: ICategoryList[];
}

const MostPopular = ({ categoryList }: MostPopularProps) => {
  return (
    <MostPopularLayout>
      <Header title="지금 가장 인기있어요" subTitle="더보기" />
      <MostPopularCategoryList>
        {categoryList.map((item, idx) => (
          <MostPopularCategoryItem key={idx}>
            <MostPopularCategoryAnchor to={item.href}>{item.text}</MostPopularCategoryAnchor>
          </MostPopularCategoryItem>
        ))}
      </MostPopularCategoryList>
      <ProductCardList />
    </MostPopularLayout>
  );
};

export default MostPopular;
