import React from "react";
import { ICategoryList } from "../../../types";
import {
  MostPopularCategoryAnchor,
  MostPopularCategoryItem,
  MostPopularCategoryList,
  MostPopularLayout,
  MostPopularSubTitle,
  MostPopularTitle,
  MostPopularTitleBox,
} from "./MostPopular.styles";
import ProductCardList from "./ProductCardList/ProductCardList";

interface MostPopularProps {
  categoryList: ICategoryList[];
}

const MostPopular = ({ categoryList }: MostPopularProps) => {
  return (
    <MostPopularLayout>
      <MostPopularTitleBox>
        <MostPopularTitle>지금 가장 인기있어요.</MostPopularTitle>
        <MostPopularSubTitle>더보기</MostPopularSubTitle>
      </MostPopularTitleBox>
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
