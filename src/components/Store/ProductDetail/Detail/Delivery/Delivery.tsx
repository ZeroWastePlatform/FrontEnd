import {
  DeliveryAlertText,
  DeliveryBox,
  DeliveryCol,
  DeliveryItem,
  DeliveryLayout,
  DeliveryOrderList,
  DeliveryRow,
  DeliverySubTitle,
  DeliveryText,
  DeliveryTitle,
} from "./Delivery.styles";
import { DeliveryDataType } from "./DeliveryContainer";

interface DeliveryProps {
  data: DeliveryDataType;
  deliveryRef: React.RefObject<HTMLDivElement>;
}

const Delivery = ({ data, deliveryRef }: DeliveryProps) => {
  return (
    <DeliveryLayout ref={deliveryRef}>
      <DeliveryCol>
        <DeliveryBox>
          <DeliveryTitle>배송</DeliveryTitle>
          {["택배배송", "배송비", "도서산간 추가 배송비", "배송불가 지역"].map((el, index) => (
            <DeliveryRow key={el}>
              <DeliverySubTitle>{el}</DeliverySubTitle>
              <DeliveryText>{data.delivery[index]}</DeliveryText>
            </DeliveryRow>
          ))}
        </DeliveryBox>
        <DeliveryBox>
          <DeliveryTitle>교환/환불</DeliveryTitle>
          {["반품배송비", "교환배송비", "보내실 곳"].map((el, index) => (
            <DeliveryRow key={el}>
              <DeliverySubTitle>{el}</DeliverySubTitle>
              <DeliveryText>{data.return[index]}</DeliveryText>
            </DeliveryRow>
          ))}
        </DeliveryBox>
        <DeliveryBox>
          <DeliveryTitle>반품/교환 사유에 따른 요청 가능 기간</DeliveryTitle>
          <DeliveryAlertText>
            반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을 협의하신 후 반품상품을 발송해
            주시기 바랍니다.
          </DeliveryAlertText>
          <DeliveryOrderList>
            <DeliveryItem>
              <i>1</i>구매자 단순 변심은 상품 수령 후 7일 이내<i> (구매자 반품배송비 부담)</i>
            </DeliveryItem>
            <DeliveryItem>
              <i>2</i>표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터
              30일 이내.
            </DeliveryItem>
            <DeliveryItem>
              <i>3</i>둘 중 하나 경과 시 반품/교환 불가<i> (판매자 반품배송비 부담)</i>
            </DeliveryItem>
          </DeliveryOrderList>
        </DeliveryBox>
        <DeliveryBox>
          <DeliveryTitle>반품/교환 불가능 사유</DeliveryTitle>
          <DeliveryAlertText>아래와 같은 경우 반품/교환이 불가능합니다.</DeliveryAlertText>
          <DeliveryOrderList>
            <DeliveryItem>
              <i>1</i>반품요청기간이 지난 경우
            </DeliveryItem>
            <DeliveryItem>
              <i>2</i>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
              <i>(단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</i>
            </DeliveryItem>
            <DeliveryItem>
              <i>3</i>포장을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우<i> (예 : 식품, 화장품)</i>
            </DeliveryItem>
            <DeliveryItem>
              <i>4</i>고객주문 확인 후 상품제작에 들어가는 주문제작상품
            </DeliveryItem>
          </DeliveryOrderList>
        </DeliveryBox>
      </DeliveryCol>
    </DeliveryLayout>
  );
};

export default Delivery;
