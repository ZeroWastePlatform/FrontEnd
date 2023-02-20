import InputBoxContainer from "../Common/InputBox/InputBoxContainer";
import SubTitle from "../Common/SubTitle/SubTitle";
import { OrderInfoAt, OrderInfoCol, OrderInfoLayout } from "./OrderInfo.styles";
import SelectBoxContainer from "./SelectBox/SelectBoxContainer";

const OrderInfo = () => {
  return (
    <OrderInfoLayout>
      <SubTitle>주문자정보</SubTitle>
      <OrderInfoCol>
        <InputBoxContainer title={{ ko: "이름", en: "ordererName" }}></InputBoxContainer>
        <InputBoxContainer title={{ ko: "연락처", en: "ordererPhone" }}></InputBoxContainer>
        <InputBoxContainer title={{ ko: "이메일", en: "ordererEmailFirst" }}>
          <OrderInfoAt>@</OrderInfoAt>
          <SelectBoxContainer />
        </InputBoxContainer>
      </OrderInfoCol>
    </OrderInfoLayout>
  );
};

export default OrderInfo;
