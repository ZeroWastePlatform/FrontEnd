import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useBuy = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigate();
  const { id } = useParams();

  const buyProduct = () => {
    navigation("/store/buy", { state: { id, count } });
  };

  const changeCount = (op: string) => {
    if (op === "plus") return setCount(count + 1);
    if (count === 0) return;
    return setCount(count - 1);
  };

  return { id, count, changeCount, buyProduct };
};

export default useBuy;
