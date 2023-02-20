import { ProductType } from "../../../../atom/buyForm";
import SubTitle from "../Common/SubTitle/SubTitle";
import {
  OrderProductLayout,
  OrderProductTopBox,
  OrderProductTopButton,
  OrderProductTopCheckbox,
  OrderProductTopText,
} from "./OrderProduct.styles";
import ProductCard from "./ProductCard/ProductCard";

interface OrderProductProps {
  changeProduct: (id: string) => void;
  changeCount: (id: string, type: "minus" | "plus") => void;
  buyProductList: ProductType[];
}

const OrderProduct = ({ changeProduct, changeCount, buyProductList }: OrderProductProps) => {
  return (
    <OrderProductLayout>
      <SubTitle>주문상품</SubTitle>
      <OrderProductTopBox>
        <OrderProductTopCheckbox type="checkbox" />
        <OrderProductTopText>전체 3개</OrderProductTopText>
        <OrderProductTopButton>선택삭제</OrderProductTopButton>
      </OrderProductTopBox>
      {buyProductList.map((data, index) => (
        <ProductCard key={index} changeProduct={changeProduct} data={data} changeCount={changeCount} />
      ))}
    </OrderProductLayout>
  );
};

export default OrderProduct;
