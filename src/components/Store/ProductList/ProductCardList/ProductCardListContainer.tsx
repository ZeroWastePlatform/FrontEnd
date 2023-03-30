import { startTransition, useRef } from "react";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../atom/userInfo";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import customAPI from "../../../../lib/customAPI";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import fixProductCondition from "../../../../utils/fixProductCondition";
import makeQuery from "../../../../utils/makeQuery";
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
  const { category, order, page, brand, price, productStatus } = condition;
  const { data } = useSuspenseQuery<ProductCardListDataType>(
    ["Store", "ProductList", "ProductCardList", category, order, page, brand, price, productStatus],
    `products${makeQuery(fixProductCondition(condition))}`,
  );
  const { id, isLogin } = useRecoilValue(userInfoAtom);
  const timer = useRef<NodeJS.Timeout>();
  const queryClient = useQueryClient();
  const { data: likeData } = useSuspenseQuery<{ content: { id: number }[] }>(
    ["Store", "ProductList", "like", id],
    `members/me/products`,
    undefined,
    isLogin,
  );

  const changePage = (page: number) => {
    startTransition(() => {
      setCondition({ ...condition, page });
    });
  };

  const changeLike = (storeId: number) => {
    const existIndex = likeData.content.findIndex(({ id }) => id === storeId);
    const newList = [
      ...likeData.content.map(({ id }) => {
        return { id };
      }),
    ];
    if (existIndex !== -1) newList.splice(existIndex, 1);
    if (existIndex === -1) newList.push({ id: storeId });
    queryClient.setQueryData(["Store", "ProductList", "like", id], { content: newList });
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      if (existIndex !== -1) {
        customAPI
          .delete(`products/${storeId}/like`)
          .then(res => res.data)
          .catch(err => {
            queryClient.setQueryData<number[]>(["todos"], old => {
              if (old !== undefined) {
                const newdata = [...old];
                newdata.push(storeId);
                return newdata;
              }
              return [1];
            });
          });
      } else {
        customAPI
          .post(`products/${storeId}/like`)
          .then(res => res.data)
          .catch(err => {
            queryClient.setQueryData<number[]>(["todos"], old => {
              if (old !== undefined) {
                return old.filter(likeId => likeId !== storeId);
              }
              return [1];
            });
          });
      }
    }, 500);
  };

  return (
    <ProductCardList
      data={data}
      condition={condition}
      setCondition={setCondition}
      changePage={changePage}
      likeData={likeData.content}
      changeLike={changeLike}
    />
  );
};

export default ProductCardListContainer;
