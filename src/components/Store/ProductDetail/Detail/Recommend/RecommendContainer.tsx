import useLikeProduct from "../../../../../hooks/useLikeProduct";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Recommend from "./Recommend";

export type RecommendDataType = {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: number;
  price: number;
  badges: string;
  thumbnail: string;
}[];

interface RecommendContainerProps {
  recommendRef: React.RefObject<HTMLDivElement>;
}

const RecommendContainer = ({ recommendRef }: RecommendContainerProps) => {
  const { data } = useSuspenseQuery<{ content: RecommendDataType }>(
    ["Store", "ProductDetail", "Recommend", "1"],
    "products?order=POPULARITY&page=0",
  );
  const { changeLike, isLiked } = useLikeProduct();

  return <Recommend data={data} recommendRef={recommendRef} changeLike={changeLike} isLiked={isLiked} />;
};

export default RecommendContainer;
