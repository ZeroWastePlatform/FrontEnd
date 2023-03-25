import axios from "axios";
import { useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userInfoAtom } from "../../../../atom/userInfo";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import fixProductCondition from "../../../../utils/fixProductCondition";
import { ProductCardProps } from "../../Common/ProductCard/ProductCard";
import ProductCardList from "./ProductCardList";

export interface ProductCardListDataContentType {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: number;
  price: number;
  badges: string;
  thumbnail: string;
}

export interface ProductCardListDataType {
  totalElements: number;
  totalPage: number;
  content: ProductCardListDataContentType[];
}

interface ProductCardListContainerProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductCardListContainer = ({ condition, setCondition }: ProductCardListContainerProps) => {
  const { category, sort, page, brand, price, productStatus } = condition;
  const { data } = useSuspenseQuery<ProductCardListDataType>(
    ["Store", "ProductList", "ProductCardList", category, sort, page, brand, price, productStatus],
    `product${fixProductCondition(condition)}`,
  );
  const { id, isLogin, like } = useRecoilValue(userInfoAtom);
  const activeChange = useRef(false);
  const queryClient = useQueryClient();

  const { data: likeData } = useSuspenseQuery<number[]>(["Store", "ProductList", "like", id], `like?id=${id}`);

  // const { mutate } = useSetQueryMutate<
  //   { id: number },
  //   (data: { totalCount: number; contents: ProductCardProps[] }) => {
  //     totalCount: number;
  //     contents: ProductCardProps[];
  //   }
  // >(
  //   id => axios.post("http://localhost:8000/product", { id }),
  //   ["Store", "ProductList", "ProductCardList", category, filter, sort, page],
  //   e => {
  //     return (data: { totalCount: number; contents: ProductCardProps[] }) => {
  //       return {
  //         totalCount: data.totalCount,
  //         contents: data.contents.map(el => {
  //           if (el.id === e.data.id) {
  //             return { ...el, liked: !el.liked };
  //           }
  //           return el;
  //         }),
  //       };
  //     };
  //   },
  // );

  const setPage = (page: number) => {
    setCondition({ ...condition, page });
  };

  const changeLike = async (productId: number) => {
    if (!isLogin) return alert("로그인을 해야 관심상품으로 추가할수 있습니다");
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
