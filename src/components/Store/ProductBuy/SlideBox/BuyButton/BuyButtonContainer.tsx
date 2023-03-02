import { useRecoilValue } from "recoil";
import { isBuyFormAtom, PriceSelector } from "../../../../../atom/buyForm";
import BuyButton from "./BuyButton";

const BuyButtonContainer = () => {
  const price = useRecoilValue(PriceSelector);
  const buyInfo = useRecoilValue(isBuyFormAtom);
  const buyProduct = () => {
    alert("구매됨!");
    console.log(buyInfo);
  };
  return <BuyButton totalPrice={price + 3000 - buyInfo.point} buyProduct={buyProduct} />;
};

export default BuyButtonContainer;
