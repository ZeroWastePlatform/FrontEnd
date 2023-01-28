import axios from "axios";
import useSetQueryMutate from "../../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import { ProductCardProps } from "../../../Common/ProductCard/ProductCard";
import Recommend from "./Recommend";

export type RecommendDataType = {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: string;
  price: string;
  badges: string[];
  liked: boolean;
}[];

interface RecommendContainerProps {
  recommendRef: React.RefObject<HTMLDivElement>;
}

const a = () => {
  return ["a"];
};

const RecommendContainer = ({ recommendRef }: RecommendContainerProps) => {
  const { data } = useSuspenseQuery<RecommendDataType>(["Store", "ProductDetail", "Recommend", "1"], "recommend");
  const { mutate } = useSetQueryMutate<{ id: number }, (data: ProductCardProps[]) => ProductCardProps[]>(
    id => axios.post("http://localhost:8000/product", { id }),
    ["Store", "ProductDetail", "Recommend", "1"],
    e => {
      return (data: ProductCardProps[]) => {
        return data.map(el => {
          if (el.id === e.data.id) {
            console.log(el.id);
            return { ...el, liked: !el.liked };
          }
          return el;
        });
      };
    },
  );
  return <Recommend data={data} recommendRef={recommendRef} changeLiked={mutate} />;
};

export default RecommendContainer;
