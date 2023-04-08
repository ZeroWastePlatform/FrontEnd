import ProductCard from "../../../Common/ProductCard/ProductCard";
import { RecommendLayout, RecommendList, RecommendTitle } from "./Recommend.styles";
import { RecommendDataType } from "./RecommendContainer";

interface RecommendProps {
  data: { content: RecommendDataType };
  recommendRef: React.RefObject<HTMLDivElement>;
  changeLike: (storeId: number) => void;
  isLiked: (curId: number) => boolean;
}

const Recommend = ({ data, recommendRef, changeLike, isLiked }: RecommendProps) => {
  return (
    <RecommendLayout ref={recommendRef}>
      <RecommendTitle>이런 제품은 어떠세요?</RecommendTitle>
      <RecommendList>
        {data.content.slice(0, 8).map((card, index) => {
          return (
            <ProductCard {...card} key={index} changeLike={changeLike} order={0} liked={isLiked(card.id)}></ProductCard>
          );
        })}
      </RecommendList>
    </RecommendLayout>
  );
};

export default Recommend;
