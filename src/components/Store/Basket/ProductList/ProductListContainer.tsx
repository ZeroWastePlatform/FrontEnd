import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isBuyFormAtom, ProductType } from "../../../../atom/buyForm";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [checkList, setCheckList] = useState<boolean[]>([]);
  const [countList, setCountList] = useState<number[]>([]);
  const { data } = useSuspenseQuery<ProductType[]>(["Store", "Basket", "ProductList", "1"], "basket");
  const { mutate: basketMutate } = useSetQueryMutate<{ id: number }, (data: ProductType[]) => ProductType[]>(
    id => axios.delete("http://localhost:8000/basket", { data: { id } }),
    ["Store", "Basket", "ProductList", "1"],
    e => {
      return (data: ProductType[]) => {
        data.splice(e.data.id, 1);
        setCountList(list => {
          const newlist = [...list];
          newlist.splice(e.data.id, 1);
          return newlist;
        });
        setCheckList(list => {
          const newlist = [...list];
          newlist.splice(e.data.id, 1);
          return newlist;
        });
        return data;
      };
    },
  );

  const setbuyFormAtom = useSetRecoilState(isBuyFormAtom);
  const navigation = useNavigate();
  useEffect(() => {
    setCheckList(new Array(data.length).fill(true));
    setCountList(new Array(data.length).fill(1));
  }, [data]);

  const changeProduct = (id: string | number) => {
    checkList[Number(id)] = !checkList[Number(id)];
    setCheckList([...checkList]);
  };

  const changeCount = (id: string | number, type: "minus" | "plus") => {
    if (type === "minus") {
      if (countList[Number(id)] > 0) {
        countList[Number(id)] -= 1;
      }
    } else {
      countList[Number(id)] += 1;
    }
    setCountList([...countList]);
  };

  const checkAllSelected = () => checkList.filter(element => element).length === checkList.length;

  const changeAllCheck = () => {
    const allchecked = checkAllSelected();
    setCheckList([...checkList].map(() => !allchecked));
  };

  const totalPrice = () => {
    if (data !== undefined) {
      return data.reduce((prev, { price }, index) => {
        if (checkList[index]) {
          return prev + countList[index] * price;
        }
        return prev;
      }, 0);
    }
    return 0;
  };

  const moveBuyPage = (index?: number) => {
    if (checkList.filter(element => element).length === 0) return 0;
    if (data !== undefined) {
      const buyProducts =
        index === undefined
          ? data
              .map((element, index) => {
                return { ...element, selected: checkList[index], count: countList[index] };
              })
              .filter(({ selected }) => selected)
          : [{ ...data[index], selected: true, count: countList[index] }];
      setbuyFormAtom(prev => ({ ...prev, product: buyProducts }));
      navigation("/store/buy");
    }
  };

  const deleteProduct = (id: number) => {
    basketMutate(id);
  };

  return (
    <ProductList
      data={data}
      changeProduct={changeProduct}
      changeCount={changeCount}
      checkAllSelected={checkAllSelected()}
      changeAllCheck={changeAllCheck}
      checkList={checkList}
      countList={countList}
      totalPrice={totalPrice}
      moveBuyPage={moveBuyPage}
      deleteProduct={deleteProduct}
    ></ProductList>
  );
};

export default ProductListContainer;
