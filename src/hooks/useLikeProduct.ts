import { useRef } from "react";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../atom/userInfo";
import customAPI from "../lib/customAPI";
import useSuspenseQuery from "./useSuspenseQuery";

const useLikeProduct = () => {
  const { id, isLogin } = useRecoilValue(userInfoAtom);
  const timer = useRef<NodeJS.Timeout>();
  const queryClient = useQueryClient();
  const { data: likeData } = useSuspenseQuery<{ content: { id: number }[] }>(
    ["Store", "ProductList", "like", id],
    `members/me/products`,
    undefined,
    isLogin,
  );

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

  return {
    likeData,
    changeLike,
  };
};

export default useLikeProduct;
