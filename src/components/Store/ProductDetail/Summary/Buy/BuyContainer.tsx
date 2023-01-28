import axios from "axios";
import useSetQueryMutate from "../../../../../hooks/useSetQueryMutate";
import { SummaryType } from "../SummaryContainer";
import Buy from "./Buy";
import useBuy from "./BuyHook";

interface BuyContainerProps {
  data: SummaryType;
}

const BuyContainer = ({ data }: BuyContainerProps) => {
  const { id, count, changeCount, buyProduct } = useBuy();
  const { mutate: basketMutate } = useSetQueryMutate(
    id => axios.post("http://localhost:8000/basket", { id }),
    ["Store", "ProductDetail", "summary", "Buy", "basket", id],
  );

  const { mutate: likedMutate } = useSetQueryMutate(
    id => axios.post("http://localhost:8000/liked", { id }),
    ["Store", "ProductDetail", "summary", "Buy", "liked", id],
  );

  return (
    <Buy
      {...data}
      count={count}
      changeCount={changeCount}
      buyProduct={buyProduct}
      setBasket={() => basketMutate(id)}
      setLiked={() => likedMutate(id)}
    ></Buy>
  );
};

export default BuyContainer;
