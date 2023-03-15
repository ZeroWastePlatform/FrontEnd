import styled from "styled-components";

export const MyOrderListLayout = styled.div``;

export const OrderListBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderListParagraph = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #252525;
`;

export const DeliveryStatusBox = styled.div`
  display: flex;
  width: 860px;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
`;

export const OrderListDataButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  width: 160px;
`;

export const OrderListDataNumber = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #7a7b7d;
`;

export const OrderListDataText = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #7a7b7d;
`;

export const OrderInfoBox = styled.div`
  width: 860px;
  height: 295px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 22px 25px 30px 19px;
  margin-top: 50px;
`;

export const OrderNumber = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #7a7b7d;
`;

export const OrderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
  margin-bottom: 28px;
`;

export const OrderStatus = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #252525;
`;

export const OrderButton = styled.button`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #252525;
  border: 0;
  background-color: white;
`;

export const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 150px;
    height: 150px;
  }
`;

export const ProductDetailInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProductBrandSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #7a7b7d;
`;

export const ProductNameSpan = styled(ProductBrandSpan)`
  font-size: 24px;
  line-height: 29px;
  color: #252525;
`;

export const ProductPriceSpan = styled(ProductBrandSpan)`
  font-weight: 700;
  color: #252525;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DeliveryCheckButton = styled.button`
  width: 150px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #66f095;
  border-radius: 10px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #66f095;
`;

export const ReviewButton = styled(DeliveryCheckButton)`
  background: #66f095;
  color: #f1f4f5;
`;

export const CancelParagraph = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const CancelData = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #a7a7a8;
`;
