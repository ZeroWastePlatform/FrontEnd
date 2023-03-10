import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isBuyFormAtom, ProductType } from "../../../../atom/buyForm";
import { userInfoAtom } from "../../../../atom/userInfo";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [checkList, setCheckList] = useState<boolean[]>([]);
  const [countList, setCountList] = useState<number[]>([]);
  const { id: userid, isLogin } = useRecoilValue(userInfoAtom);
  const { data } = useSuspenseQuery<ProductType[]>(["Store", "Basket", "ProductList", userid], `basket?id=${userid}`);
  const queryClient = useQueryClient();
  const basketMutate = async (id: number) => {
    await axios.delete(`https://zerowasteproduct.herokuapp.com/basket?userId=${userid}&productId=${id}`);
    setCountList(list => {
      const newlist = [...list];
      newlist.splice(id, 1);
      return newlist;
    });
    setCheckList(list => {
      const newlist = [...list];
      newlist.splice(id, 1);
      return newlist;
    });
    queryClient.invalidateQueries();
  };

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
