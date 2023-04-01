import React from "react";
import { ICategoryList } from "../../../types";
import ProductCard from "../../Store/Common/ProductCard/ProductCard";
import { ProductCardListDataType } from "../../Store/ProductList/ProductCardList/ProductCardListContainer";
import Header from "../Common/Header/Header";
import {
  MostPopularCategoryItem,
  MostPopularCategoryItemButton,
  MostPopularCategoryList,
  MostPopularLayout,
  MostPopularProductList,
} from "./MostPopular.styles";
import ProductCardList from "./ProductCardList/ProductCardList";

interface MostPopularProps {
  categoryList: ICategoryList[];
  data: ProductCardListDataType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  likeData: {
    id: number;
  }[];
  changeLike: (storeId: number) => void;
}

const MostPopular = ({
  categoryList,
  data,
  setSelectedCategory,
  selectedCategory,
  likeData,
  changeLike,
}: MostPopularProps) => {
  return (
    <MostPopularLayout>
      <Header title="지금 가장 인기있어요" subTitle="더보기" />
      <MostPopularCategoryList>
        {categoryList.map((item, idx) => (
          <MostPopularCategoryItem key={idx}>
            <MostPopularCategoryItemButton
              onClick={() => setSelectedCategory(item.en)}
              match={item.en === selectedCategory}
            >
              {item.text}
            </MostPopularCategoryItemButton>
          </MostPopularCategoryItem>
        ))}
      </MostPopularCategoryList>
      <MostPopularProductList>
        {data.content.slice(0, 3).map((value, index) => (
          <ProductCard
            {...value}
            key={index}
            order={0}
            liked={likeData.findIndex(({ id }) => id === value.id) === -1 ? false : true}
            changeLike={changeLike}
          />
        ))}
      </MostPopularProductList>
    </MostPopularLayout>
  );
};

export default MostPopular;
