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
  changeProduct: (id: string | number) => void;
  changeCount: (id: string | number, type: "minus" | "plus") => void;
  buyProductList: ProductType[];
  allSelected: boolean;
  changeAllCheck: () => void;
  deleteProduct: (id: number) => void;
}

const OrderProduct = ({
  changeProduct,
  changeCount,
  buyProductList,
  allSelected,
  changeAllCheck,
  deleteProduct,
}: OrderProductProps) => {
  return (
    <OrderProductLayout>
      <SubTitle>주문상품</SubTitle>
      <OrderProductTopBox>
        <OrderProductTopCheckbox type="checkbox" checked={allSelected} onChange={changeAllCheck} />
        <OrderProductTopText>전체 3개</OrderProductTopText>
        <OrderProductTopButton>선택삭제</OrderProductTopButton>
      </OrderProductTopBox>
      {buyProductList.map((data, index) => (
        <ProductCard
          key={index}
          changeProduct={changeProduct}
          data={data}
          changeCount={changeCount}
          deleteProduct={deleteProduct}
        />
      ))}
    </OrderProductLayout>
  );
};

export default OrderProduct;
