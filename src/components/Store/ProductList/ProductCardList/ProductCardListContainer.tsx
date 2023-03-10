import axios from "axios";
import { useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginUserAtom } from "../../../../atom/loginuser";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import { ProductCardProps } from "../../Common/ProductCard/ProductCard";
import ProductCardList from "./ProductCardList";

export interface ProductCardListDataContentType {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: number;
  price: number;
  badges: number;
  thumnail: string;
}

export interface ProductCardListDataType {
  count: number;
  rows: ProductCardListDataContentType[];
}

interface ProductCardListContainerProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductCardListContainer = ({ condition, setCondition }: ProductCardListContainerProps) => {
  const { category, filter, sort, page } = condition;
  const { data } = useSuspenseQuery<ProductCardListDataType>(
    ["Store", "ProductList", "ProductCardList", category, filter, sort, page],
    `product?category=${category}${filter.map(el => `&filter=${el}`).join("")}&sort=${sort}&page=${page}`,
  );
  const { id, login, like } = useRecoilValue(isLoginUserAtom);
  const activeChange = useRef(false);
  const queryClient = useQueryClient();

  const { data: likeData } = useSuspenseQuery<number[]>(["Store", "ProductList", "like", id], `like?id=${id}`);

  const setPage = (page: number) => {
    setCondition({ ...condition, page });
  };

  const changeLike = async (productId: number) => {
    if (!login) return alert("로그인을 해야 관심상품으로 추가할수 있습니다");
    if (!activeChange.current) {
      activeChange.current = true;
      const newLike = queryClient.getQueryData<number[]>(["Store", "ProductList", "like", id]) as number[];
      if (like.indexOf(productId) === -1) {
        await axios.post(`https://zerowasteproduct.herokuapp.com/like?productId=${productId}&userId=${id}`);
        newLike.push(productId);
      } else {
        await axios.delete(`https://zerowasteproduct.herokuapp.com/like?productId=${productId}&userId=${id}`);
        const index = newLike.indexOf(productId);
        newLike.splice(index, 1);
      }

      queryClient.setQueryData(["Store", "ProductList", "like", id], [...newLike]);
      activeChange.current = false;
    }
  };
  return (
    <ProductCardList
      data={data}
      condition={condition}
      setCondition={setCondition}
      setPage={setPage}
      likeData={likeData}
      changeLike={changeLike}
    />
  );
};

export default ProductCardListContainer;
