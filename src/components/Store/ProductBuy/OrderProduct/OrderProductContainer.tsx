import { useRecoilValue, useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../../../../atom/buyForm";
import OrderProduct from "./OrderProduct";

const OrderProductContainer = () => {
  const setToggleAtom = useSetRecoilState(isBuyFormAtom);
  const { product } = useRecoilValue(isBuyFormAtom);

  const changeProduct = (id: string) => {
    setToggleAtom(prev => {
      const product = JSON.parse(JSON.stringify(prev.product));
      const index = product.findIndex((e: { id: string }) => e.id === id);
      product[index].selected = !product[index].selected;
      return { ...prev, product };
    });
  };

  const changeCount = (id: string, type: "minus" | "plus") => {
    setToggleAtom(prev => {
      const product = JSON.parse(JSON.stringify(prev.product));
      const index = product.findIndex((e: { id: string }) => e.id === id);
      if (type === "minus") {
        if (product[index].count > 0) {
          product[index].count -= 1;
        }
      } else {
        if (product[index].count > 0) {
          product[index].count += 1;
        }
      }
      return { ...prev, product };
    });
  };

  return <OrderProduct changeProduct={changeProduct} buyProductList={product} changeCount={changeCount} />;
};

export default OrderProductContainer;
