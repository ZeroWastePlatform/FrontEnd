import axios from "axios";
import { useRef } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../atom/userInfo";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import Summary from "./Summary";

export interface SummaryType {
  id: number;
  thumnail: string;
  category: string;
  badges: number;
  brand: string;
  title: string;
  price: number;
  summary: string;
  productLike: string[];
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
  const { data } = useSuspenseQuery<SummaryType>(
    ["Store", "ProductDetail", "summary", id],
    `product/detail?id=${id}`,
    e => setCondition({ category: e.category }),
  );

  const { id: userid, isLogin } = useRecoilValue(userInfoAtom);
  const activeChange = useRef(false);
  const queryClient = useQueryClient();

  const changeLike = async (productId: number) => {
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
  const { data: likeData } = useSuspenseQuery<number[]>(["Store", "ProductList", "like", userid], `like?id=${userid}`);

  return <Summary data={data} liked={likeData.indexOf(Number(id)) !== -1} changeLike={changeLike} />;
};

export default SummaryContainer;
