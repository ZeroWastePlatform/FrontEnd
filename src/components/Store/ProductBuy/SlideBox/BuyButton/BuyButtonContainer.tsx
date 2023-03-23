import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isBuyFormAtom, PriceSelector } from "../../../../../atom/buyForm";
import BuyButton from "./BuyButton";

const BuyButtonContainer = () => {
  const price = useRecoilValue(PriceSelector);
  const buyInfo = useRecoilValue(isBuyFormAtom);
  const navigation = useNavigate();
  const buyProduct = async () => {
    const body = {
      name: buyInfo.ordererName,
      phoneNum: buyInfo.ordererPhone,
      email: buyInfo.ordererEmailFirst,
      address: {
        addressName: "집",
        recipient: buyInfo.ordererName,
        recipientPhone: buyInfo.ordererPhone,
        zipCode: buyInfo.address1,
        address: buyInfo.address2,
        addressDetail: buyInfo.address3,
      },
      totalPrice: price + 3000 - buyInfo.point,
    };
    try {
      await axios.post("http://greenus.duckdns.org/api/purchases", body);
      alert("구매에 성공하였습니다!");
      navigation("/");
    } catch {
      alert("에러가 발생하였습니다. 다시 시도해주세요");
    }
  };
  return <BuyButton totalPrice={price + 3000 - buyInfo.point} buyProduct={buyProduct} />;
};

export default BuyButtonContainer;
