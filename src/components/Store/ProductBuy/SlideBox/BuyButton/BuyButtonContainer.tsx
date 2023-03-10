import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isBuyFormAtom, PriceSelector } from "../../../../../atom/buyForm";
import { isLoginUserAtom } from "../../../../../atom/loginuser";
import BuyButton from "./BuyButton";

const BuyButtonContainer = () => {
  const price = useRecoilValue(PriceSelector);
  const buyInfo = useRecoilValue(isBuyFormAtom);
  const user = useRecoilValue(isLoginUserAtom);

  const navigation = useNavigate();
  const buyProduct = async () => {
    const body = {
      product: buyInfo.product.map(({ id }) => id),
      id: user.id,
    };
    try {
      await axios.post("https://zerowasteproduct.herokuapp.com/purchase", body);
      alert("구매에 성공하였습니다!");
      navigation("/");
    } catch {
      alert("에러가 발생하였습니다. 다시 시도해주세요");
    }
  };
  return <BuyButton totalPrice={price + 3000 - buyInfo.point} buyProduct={buyProduct} />;
};

export default BuyButtonContainer;
