import React, { startTransition, useState } from "react";
import useLikeProduct from "../../../hooks/useLikeProduct";
import useSuspenseQuery from "../../../hooks/useSuspenseQuery";
import { getCategoryList } from "../../../utils/getCategoryList";
import { ProductCardListDataType } from "../../Store/ProductList/ProductCardList/ProductCardListContainer";
import MostPopular from "./MostPopular";

const MostPopularContainer = () => {
  const categoryList = getCategoryList();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const { data } = useSuspenseQuery<ProductCardListDataType>(
    ["Home", "MostPopular", selectedCategory],
    `products?${selectedCategory !== "ALL" ? `category=${selectedCategory}&` : ""}page=0&order=POPULARITY`,
  );
  const { likeData, changeLike } = useLikeProduct();

  const changeSelectedCategory = (category: string) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };
  return (
    <MostPopular
      categoryList={categoryList}
      data={data}
      selectedCategory={selectedCategory}
      changeSelectedCategory={changeSelectedCategory}
      likeData={likeData === undefined ? [] : likeData.content}
      changeLike={changeLike}
    />
  );
};

export default MostPopularContainer;
