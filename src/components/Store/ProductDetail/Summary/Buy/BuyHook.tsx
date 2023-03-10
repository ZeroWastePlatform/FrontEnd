import { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../../../../../atom/buyForm";
import { SummaryType } from "../SummaryContainer";

const useBuy = () => {
  const [count, setCount] = useState(1);
  const navigation = useNavigate();
  const { id } = useParams();
  const setToggleAtom = useSetRecoilState(isBuyFormAtom);
  const queryClient = useQueryClient();
  const buyProduct = () => {
    const data = queryClient.getQueryData<SummaryType>(["Store", "ProductDetail", "summary", "1"]) as SummaryType;
    console.log(data);

    const product = [
      {
        id: Number(id),
        selected: true,
        image: data.thumnail[0],
        brand: data.brand,
        name: data.title,
        price: data.price,
        count,
      },
    ];
    setToggleAtom(prev => ({ ...prev, product }));
    navigation("/store/buy");
  };

  const changeCount = (op: string) => {
    if (op === "plus") return setCount(count + 1);
    if (count === 0) return;
    return setCount(count - 1);
  };

  return { id, count, changeCount, buyProduct };
};

export default useBuy;
