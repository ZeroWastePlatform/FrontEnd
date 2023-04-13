import axios from "axios";
import { useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../atom/userInfo";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import getReview from "../../../../mock/reviewList";
import Summary from "./Summary";

export interface SummaryType {
  id: number;
  thumbnail: string;
  category: string;
  badges: string;
  brand: string;
  title: string;
  price: number;
  description: string;
  likeCount: number;
  deliveryFee: number;
  discountRate: number;
}

interface SummaryContainerProps {
  setCondition: React.Dispatch<
    React.SetStateAction<{
      category?: string | undefined;
    }>
  >;
}

const SummaryContainer = ({ setCondition }: SummaryContainerProps) => {
  const { id } = useParams();
  const { data } = useSuspenseQuery<SummaryType>(["Store", "ProductDetail", "summary", id], `products/${id}`, e =>
    setCondition({ category: e.category }),
  );

  const { id: userid, isLogin } = useRecoilValue(userInfoAtom);
  const activeChange = useRef(false);
  const queryClient = useQueryClient();

  // const changeLike = async (productId: number) => {
  //   if (!isLogin) return alert("로그인을 해야 관심상품으로 추가할수 있습니다");
  //   if (!activeChange.current) {
  //     activeChange.current = true;
  //     const newLike = queryClient.getQueryData<number[]>(["Store", "ProductList", "like", userid]) as number[];
  //     if (true) {
  //       await axios.post(`https://zerowasteproduct.herokuapp.com/like?productId=${productId}&userId=${userid}`);
  //       newLike.push(productId);
  //     } else {
  //       await axios.delete(`https://zerowasteproduct.herokuapp.com/like?productId=${productId}&userId=${userid}`);
  //       const index = newLike.indexOf(productId);
  //       newLike.splice(index, 1);
  //     }
  //     queryClient.invalidateQueries();
  //     queryClient.setQueryData(["Store", "ProductList", "like", userid], [...newLike]);
  //     activeChange.current = false;
  //   }
  // };
  // const { data: likeData } = useSuspenseQuery<number[]>(["Store", "ProductList", "like", userid], `like?id=${userid}`);
  const changeLike = async (productId: number) => {
    console.log(1);
  };
  return <Summary data={data} liked={true} changeLike={changeLike} />;
};

export default SummaryContainer;
