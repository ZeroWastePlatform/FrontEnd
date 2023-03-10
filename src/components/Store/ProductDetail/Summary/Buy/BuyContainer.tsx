import axios from "axios";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { ProductType } from "../../../../../atom/buyForm";
import { isLoginUserAtom } from "../../../../../atom/loginuser";
import useLoginCheck from "../../../../../hooks/useLoginCheck";
import useSetQueryMutate from "../../../../../hooks/useSetQueryMutate";
import { SummaryType } from "../SummaryContainer";
import Buy from "./Buy";
import useBuy from "./BuyHook";
interface BuyContainerProps {
  data: SummaryType;
  liked: boolean;
  changeLike: (productId: number) => Promise<void>;
}

const BuyContainer = ({ data, liked, changeLike }: BuyContainerProps) => {
  const { id, count, changeCount, buyProduct } = useBuy();
  const queryClient = useQueryClient();
  const islogin = useLoginCheck();
  const { id: userid } = useRecoilValue(isLoginUserAtom);

  const basketMutate = async () => {
    try {
      const { data, status } = await axios.post(
        `https://zerowasteproduct.herokuapp.com/basket?userId=${userid}&productId=${id}`,
      );
      if (status == 203) {
        alert("이미 담겨있습니다.");
      } else {
        alert("장바구니에 담았습니다");
        queryClient.invalidateQueries();
      }
    } catch (error) {
      alert("에러발생");
    }
  };

  return (
    <Buy
      {...data}
      count={count}
      changeCount={changeCount}
      buyProduct={buyProduct}
      setBasket={basketMutate}
      liked={liked}
      changeLike={changeLike}
    ></Buy>
  );
};

export default BuyContainer;
