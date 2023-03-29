import axios from "axios";
import { useRef } from "react";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../../atom/userInfo";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Recommend from "./Recommend";

export type RecommendDataType = {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: number;
  price: number;
  badges: string;
  thumbnail: string;
}[];

interface RecommendContainerProps {
  recommendRef: React.RefObject<HTMLDivElement>;
}

const RecommendContainer = ({ recommendRef }: RecommendContainerProps) => {
  const { data } = useSuspenseQuery<{ content: RecommendDataType }>(
    ["Store", "ProductDetail", "Recommend", "1"],
    "products?order=POPULARITY&page=0",
  );
  const { id: userid, isLogin } = useRecoilValue(userInfoAtom);
  const activeChange = useRef(false);
  const queryClient = useQueryClient();

  const changeLike = async (productId: number) => {
    return alert("미구현");
    if (!isLogin) return alert("로그인을 해야 관심상품으로 추가할수 있습니다");
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
  // const { data: likeData } = useSuspenseQuery<number[]>(["Store", "ProductList", "like", userid], `like?id=${userid}`);
  const likeData = [1];
  return <Recommend data={data} recommendRef={recommendRef} changeLike={changeLike} likeData={likeData} />;
};

export default RecommendContainer;
