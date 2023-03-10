import axios from "axios";
import { useRef } from "react";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { isLoginUserAtom } from "../../../../../atom/loginuser";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Recommend from "./Recommend";

export type RecommendDataType = {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: number;
  price: number;
  badges: number;
  thumnail: string;
}[];

interface RecommendContainerProps {
  recommendRef: React.RefObject<HTMLDivElement>;
}

const RecommendContainer = ({ recommendRef }: RecommendContainerProps) => {
  const { data } = useSuspenseQuery<RecommendDataType>(
    ["Store", "ProductDetail", "Recommend", "1"],
    "product/recommend",
  );
  const { id: userid, login } = useRecoilValue(isLoginUserAtom);
  const activeChange = useRef(false);
  const queryClient = useQueryClient();

  const changeLike = async (productId: number) => {
    if (!login) return alert("로그인을 해야 관심상품으로 추가할수 있습니다");
    if (!activeChange.current) {
      activeChange.current = true;
      const newLike = queryClient.getQueryData<number[]>(["Store", "ProductList", "like", userid]) as number[];
      if (likeData.indexOf(productId) === -1) {
        await axios.post(`https://zerowasteproduct.herokuapp.com/like?productId=${productId}&userId=${userid}`);
        newLike.push(productId);
      } else {
        await axios.delete(`https://zerowasteproduct.herokuapp.com/like?productId=${productId}&userId=${userid}`);
        const index = newLike.indexOf(productId);
        newLike.splice(index, 1);
      }
      queryClient.invalidateQueries();
      queryClient.setQueryData(["Store", "ProductList", "like", userid], [...newLike]);
      activeChange.current = false;
    }
  };
  const { data: likeData } = useSuspenseQuery<number[]>(["Store", "ProductList", "like", userid], `like?id=${userid}`);
  return <Recommend data={data} recommendRef={recommendRef} changeLike={changeLike} likeData={likeData} />;
};

export default RecommendContainer;
