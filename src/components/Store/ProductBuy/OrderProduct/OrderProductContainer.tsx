import { useRecoilValue, useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../../../../atom/buyForm";
import OrderProduct from "./OrderProduct";

const OrderProductContainer = () => {
  const setToggleAtom = useSetRecoilState(isBuyFormAtom);
  const { product } = useRecoilValue(isBuyFormAtom);

  const changeProduct = (id: string | number) => {
    setToggleAtom(prev => {
      const product = JSON.parse(JSON.stringify(prev.product));
      const index = product.findIndex((e: { id: string }) => e.id === id);
      product[index].selected = !product[index].selected;
      return { ...prev, product };
    });
  };

  const changeCount = (id: string | number, type: "minus" | "plus") => {
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

  const checkAllSelected = () => product.filter(({ selected }) => selected).length === product.length;

  const changeAllCheck = () => {
    setToggleAtom(prev => {
      const product = JSON.parse(JSON.stringify(prev.product));
      const newProduct = product.map((element: { selected: boolean }) => ({ ...element, selected: !element.selected }));
      console.log(newProduct);
      return { ...prev, product: newProduct };
    });
  };

  const deleteProduct = (id: number) => {
    setToggleAtom(prev => {
      const product = JSON.parse(JSON.stringify(prev.product));
      const index = product.findIndex((element: { id: number }) => element.id === id);
      product.splice(index, 1);
      return { ...prev, product };
    });
  };

  return (
    <OrderProduct
      changeProduct={changeProduct}
      buyProductList={product}
      changeCount={changeCount}
      allSelected={checkAllSelected()}
      changeAllCheck={changeAllCheck}
      deleteProduct={deleteProduct}
    />
  );
};

export default OrderProductContainer;
