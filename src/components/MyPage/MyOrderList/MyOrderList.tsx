import { useState } from "react";
import {
  ButtonBox,
  CancelParagraph,
  DeliveryCheckButton,
  DeliveryCompletedBox,
  DeliveryCompletedNumber,
  DeliveryCompletedText,
  DeliveryInProgressBox,
  DeliveryInProgressNumber,
  DeliveryInProgressText,
  DeliveryPreparationBox,
  DeliveryPreparationNumber,
  DeliveryPreparationText,
  DeliveryStatusBox,
  MyOrderListLayout,
  OrderBox,
  OrderButton,
  OrderInfoBox,
  OrderListBox,
  OrderListParagraph,
  OrderNumber,
  OrderStatus,
  PaymentCompletedBox,
  PaymentCompletedNumber,
  PaymentCompletedText,
  PeriodSelect,
  ProductBox,
  ProductBrandSpan,
  ProductDetailInfoBox,
  ProductInfoBox,
  ProductNameSpan,
  ProductPriceSpan,
  ReviewButton,
  TotalBox,
  TotalNumber,
  TotalText,
} from "./MyOrderList.style";
import ArrowPng from "../../../../src/assets/images/arrowIcon.png";

interface IMyOrderListProps {
  selectList: {
    id: number;
    period: string;
  }[];
}

const MyOrderList = ({ selectList }: IMyOrderListProps) => {
  const [selectPeriod, setSelectPeriod] = useState("기간");

  return (
    <MyOrderListLayout>
      <OrderListBox>
        <OrderListParagraph>주문내역</OrderListParagraph>
        <PeriodSelect
          onChange={e => {
            setSelectPeriod(e.target.value);
          }}
          value={selectPeriod}
        >
          {selectList.map(item => (
            <option value={item.period} key={item.id}>
              {item.period}
            </option>
          ))}
        </PeriodSelect>
      </OrderListBox>

      <DeliveryStatusBox>
        <TotalBox>
          <TotalNumber>2</TotalNumber>
          <TotalText>전체</TotalText>
        </TotalBox>
        <img src={ArrowPng} alt="" />

        <PaymentCompletedBox>
          <PaymentCompletedNumber>0</PaymentCompletedNumber>
          <PaymentCompletedText>결제완료</PaymentCompletedText>
        </PaymentCompletedBox>
        <img src={ArrowPng} alt="" />

        <DeliveryPreparationBox>
          <DeliveryPreparationNumber>0</DeliveryPreparationNumber>
          <DeliveryPreparationText>배송준비</DeliveryPreparationText>
        </DeliveryPreparationBox>
        <img src={ArrowPng} alt="" />

        <DeliveryInProgressBox>
          <DeliveryInProgressNumber>1</DeliveryInProgressNumber>
          <DeliveryInProgressText>배송중</DeliveryInProgressText>
        </DeliveryInProgressBox>
        <img src={ArrowPng} alt="" />

        <DeliveryCompletedBox>
          <DeliveryCompletedNumber>1</DeliveryCompletedNumber>
          <DeliveryCompletedText>배송완료</DeliveryCompletedText>
        </DeliveryCompletedBox>
      </DeliveryStatusBox>

      <OrderInfoBox>
        <OrderNumber>주문번호 221223-000123 | 2022.12.23</OrderNumber>
        <OrderBox>
          <OrderStatus>12/30(수)배송완료</OrderStatus>
          <OrderButton>상세보기 {">"}</OrderButton>
        </OrderBox>

        <ProductBox>
          <ProductInfoBox>
            <img src="images/" />
            <ProductDetailInfoBox>
              <ProductBrandSpan>동구밭</ProductBrandSpan>
              <ProductNameSpan>올바린 린스바</ProductNameSpan>
              <ProductPriceSpan>9,500/1개</ProductPriceSpan>
            </ProductDetailInfoBox>
          </ProductInfoBox>

          <ButtonBox>
            <DeliveryCheckButton>배송조회</DeliveryCheckButton>
            <ReviewButton>리뷰쓰기</ReviewButton>
          </ButtonBox>
        </ProductBox>
      </OrderInfoBox>

      <CancelParagraph>취소/교환/반품</CancelParagraph>
    </MyOrderListLayout>
  );
};

export default MyOrderList;
