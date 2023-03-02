import { numberWithCommas } from "../../../../../utils/priceProcess";
import {
  SideBarBoldText,
  SideBarBoxCol,
  SideBarBoxInfoBlock,
  SideBarBoxLayout,
  SideBarButton,
  SideBarButtonText,
  SideBarPriceText,
  SideBarsubTitleText,
} from "./SideBar.styles";

interface SideBarProps {
  price: number;
  count: number;
  moveBuyPage: (index?: number) => void;
}

const SideBarBox = ({ price, count, moveBuyPage }: SideBarProps) => {
  return (
    <SideBarBoxLayout>
      <SideBarBoxInfoBlock>
        <SideBarBoxCol margin={"20px;"}>
          <SideBarsubTitleText>총 상품금액</SideBarsubTitleText>
          <SideBarPriceText bold={true}>{numberWithCommas(price)} 원</SideBarPriceText>
        </SideBarBoxCol>
        <SideBarBoxCol margin={"20px;"}>
          <SideBarsubTitleText>배송비</SideBarsubTitleText>
          <SideBarPriceText>3,000 원</SideBarPriceText>
        </SideBarBoxCol>
        <SideBarBoxCol margin={"53.5px;"}>
          <SideBarsubTitleText>할인금액</SideBarsubTitleText>
          <SideBarPriceText>-1,500 원</SideBarPriceText>
        </SideBarBoxCol>
        <SideBarBoxCol margin={"20px;"}>
          <SideBarBoldText>결제금액</SideBarBoldText>
          <SideBarBoldText>
            <i>{numberWithCommas(price + 3000)}</i> 원
          </SideBarBoldText>
        </SideBarBoxCol>
      </SideBarBoxInfoBlock>
      <SideBarButton onClick={() => moveBuyPage()} active={count === 0 ? "false" : "true"}>
        <SideBarButtonText>{count}개 상품 구매하기</SideBarButtonText>
      </SideBarButton>
    </SideBarBoxLayout>
  );
};

export default SideBarBox;
