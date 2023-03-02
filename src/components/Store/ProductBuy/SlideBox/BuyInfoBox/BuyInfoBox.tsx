import { useRecoilValue } from "recoil";
import { isBuyFormAtom, PriceSelector } from "../../../../../atom/buyForm";
import {
  BuyInfoBoldText,
  BuyInfoBoxCol,
  BuyInfoBoxLayout,
  BuyInfoNormalText,
  BuyInfoPriceText,
  BuyInfosubTitleText,
} from "./BuyInfoBox.styles";

const BuyInfoBox = () => {
  const price = useRecoilValue(PriceSelector);
  const { point } = useRecoilValue(isBuyFormAtom);
  return (
    <BuyInfoBoxLayout>
      <BuyInfoBoxCol margin={"30px;"}>
        <BuyInfoBoldText>결제금액</BuyInfoBoldText>
      </BuyInfoBoxCol>
      <BuyInfoBoxCol margin={"20px;"}>
        <BuyInfosubTitleText>총 상품금액</BuyInfosubTitleText>
        <BuyInfoPriceText bold={true}>{price} 원</BuyInfoPriceText>
      </BuyInfoBoxCol>
      <BuyInfoBoxCol margin={"20px;"}>
        <BuyInfosubTitleText>배송비</BuyInfosubTitleText>
        <BuyInfoPriceText>3,000 원</BuyInfoPriceText>
      </BuyInfoBoxCol>
      <BuyInfoBoxCol margin={"30px;"}>
        <BuyInfosubTitleText>포인트 사용</BuyInfosubTitleText>
        <BuyInfoPriceText>-{point}원</BuyInfoPriceText>
      </BuyInfoBoxCol>
      <BuyInfoBoxCol margin={"30px;"}>
        <BuyInfoBoldText>최종결제금액</BuyInfoBoldText>
        <BuyInfoBoldText>
          <i>{price + 3000}</i> 원
        </BuyInfoBoldText>
      </BuyInfoBoxCol>
      <BuyInfoBoxCol margin={"30px;"}>
        <BuyInfoNormalText>
          <i>{(price + 3000) * 0.05}</i> 포인트 적립 예정
        </BuyInfoNormalText>
      </BuyInfoBoxCol>
    </BuyInfoBoxLayout>
  );
};

export default BuyInfoBox;
