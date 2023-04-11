import { startTransition, useEffect, useState } from "react";
import useLikeProduct from "../../../hooks/useLikeProduct";
import useSuspenseQuery from "../../../hooks/useSuspenseQuery";
import customAPI from "../../../lib/customAPI";
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
  useEffect(() => {
    Promise.all(
      categoryList
        .map(({ en }) => en)
        .slice(1, categoryList.length)
        .map(category =>
          customAPI.get<{ content: [{ thumbnail: string }] }>(`products?category=${category}&page=0&order=POPULARITY`),
        ),
    ).then(res => {
      res.forEach(({ data: { content } }) =>
        content.slice(0, 3).forEach(({ thumbnail }) => {
          const imageObject = new Image();
          imageObject.src = `https://zerowasteproduct.herokuapp.com${thumbnail}`;
        }),
      );
    });
  });

  const { isLiked, changeLike } = useLikeProduct();

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
      isLiked={isLiked}
      changeLike={changeLike}
    />
  );
};

export default MostPopularContainer;
