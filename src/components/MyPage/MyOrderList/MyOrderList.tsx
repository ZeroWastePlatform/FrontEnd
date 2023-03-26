import {
  ButtonBox,
  CancelParagraph,
  DeliveryCheckButton,
  DeliveryStatusBox,
  MyOrderListLayout,
  OrderBox,
  OrderButton,
  OrderListBox,
  OrderListParagraph,
  OrderNumber,
  OrderStatus,
  ProductBox,
  ProductBrandSpan,
  ProductDetailInfoBox,
  ProductInfoBox,
  ProductNameSpan,
  ProductPriceSpan,
  ReviewButton,
  OrderListDataButton,
  OrderListDataNumber,
  OrderListDataText,
  OrderInfoBox,
  CancelData,
} from "./MyOrderList.style";
import { useEffect, useState } from "react";
import ArrowPng from "../../../../src/assets/images/arrowIcon.png";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IUserPurchaseProps {
  badges: number;
  brand: string;
  category: string;
  createdAt: string;
  discountRate: number;
  id: number;
  price: number;
  summary: string;
  thumnail: string;
  title: string;
  updatedAt: string;
}

const MyOrderList = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState<IUserPurchaseProps[]>([]);

  const [selectStatusList, setSelectStatusList] = useState(0);

  const orderListAPI = async (): Promise<void> => {
    try {
      const result = await axios.get("http://localhost:3306/purchase/detail?id=1 ");
      setOrderList(result.data.userPurchase);
    } catch {
      throw new Error("network error");
    }
  };

  const handleDetailClick = (id: number) => {
    navigate(`/store/product/${id}`);
  };

  useEffect(() => {
    orderListAPI();
  }, []);

  const orderListData = [
    { img: ArrowPng, text: "결제완료", number: orderList?.length },
    { img: ArrowPng, text: "배송준비", number: Math.ceil(orderList?.length / 3) },
    { img: ArrowPng, text: "배송중", number: Math.ceil(orderList?.length / 3) },
    { img: ArrowPng, text: "배송완료", number: Math.ceil(orderList?.length / 3) },
  ];

  return (
    <MyOrderListLayout>
      <OrderListBox>
        <OrderListParagraph>주문내역</OrderListParagraph>
      </OrderListBox>

      <DeliveryStatusBox>
        {orderListData.map(({ img, text, number }, index) => {
          const isSelected = selectStatusList === index;
          return (
            <React.Fragment key={text}>
              <OrderListDataButton
                onClick={() => {
                  setSelectStatusList(index);
                }}
              >
                <OrderListDataNumber style={isSelected ? { color: "#66f095" } : undefined}>
                  {number}
                </OrderListDataNumber>
                <OrderListDataText style={isSelected ? { color: "#66f095" } : undefined}>{text}</OrderListDataText>
              </OrderListDataButton>
              {index === orderListData.length - 1 ? null : <img src={img} alt="" />}
            </React.Fragment>
          );
        })}
      </DeliveryStatusBox>

      {orderList
        .filter(item => {
          if (selectStatusList === 0) return true;
          return item.id === selectStatusList;
        })
        .map(order => {
          const date = order.createdAt.substr(0, order.createdAt.indexOf("T"));
          const orderNumber = parseInt(date.replace(/-/g, ""));
          const month = date.split("-")[1];
          const day = date.split("-")[2];
          const deliveryStatus = ["배송준비", "배송중", "배송완료"];

          return (
            <OrderInfoBox key={order.id}>
              <OrderNumber>
                주문번호 {orderNumber}-012123 | {date}
              </OrderNumber>
              <OrderBox>
                <OrderStatus>
                  {month}/{day}(수){deliveryStatus[order.id - 1]}
                </OrderStatus>
                <OrderButton
                  onClick={() => {
                    handleDetailClick(order.id);
                  }}
                >
                  상세보기 {">"}
                </OrderButton>
              </OrderBox>

              <ProductBox>
                <ProductInfoBox>
                  <img src={`http://localhost:3306${order.thumnail}`} />
                  <ProductDetailInfoBox>
                    <ProductBrandSpan>{order.brand}</ProductBrandSpan>
                    <ProductNameSpan>{order.title}</ProductNameSpan>
                    <ProductPriceSpan>{order.price.toLocaleString()}원/1개</ProductPriceSpan>
                  </ProductDetailInfoBox>
                </ProductInfoBox>

                <ButtonBox>
                  <DeliveryCheckButton>배송조회</DeliveryCheckButton>
                  {order.id === 3 && <ReviewButton>리뷰쓰기</ReviewButton>}
                </ButtonBox>
              </ProductBox>
            </OrderInfoBox>
          );
        })}

      <CancelParagraph>취소/교환/반품</CancelParagraph>
      <CancelData>취소내역이 없습니다.</CancelData>
    </MyOrderListLayout>
  );
};

export default MyOrderList;
