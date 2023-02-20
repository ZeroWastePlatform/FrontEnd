import BuyButtonContainer from "./BuyButton/BuyButtonContainer";
import BuyInfoBox from "./BuyInfoBox/BuyInfoBox";
import FoldText from "./FoldText/FoldText";
import { SlideBoxAlertText, SlideBoxLayout } from "./SlideBox.styles";

const SlideBox = () => {
  return (
    <SlideBoxLayout>
      <BuyInfoBox />
      <FoldText />
      <SlideBoxAlertText>
        본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
        <br />
        <br /> (주)그리너스는 통신판매중개자로 거래 당사자가 아니므로,
        <br /> 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.
      </SlideBoxAlertText>
      <BuyButtonContainer />
    </SlideBoxLayout>
  );
};

export default SlideBox;
