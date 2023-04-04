import ProductCard from "../../../Common/ProductCard/ProductCard";
import { RecommendLayout, RecommendList, RecommendTitle } from "./Recommend.styles";
import { RecommendDataType } from "./RecommendContainer";

interface RecommendProps {
  data: { content: RecommendDataType };
  recommendRef: React.RefObject<HTMLDivElement>;
  changeLike: (productId: number) => Promise<void>;
  likeData: number[];
}

const Recommend = ({ data, recommendRef, changeLike, likeData }: RecommendProps) => {
  return (
    <RecommendLayout ref={recommendRef}>
      <RecommendTitle>이런 제품은 어떠세요?</RecommendTitle>
      <RecommendList>
        {data.content.slice(0, 6).map((card, index) => {
          return (
            <ProductCard
              {...card}
              key={index}
              changeLike={changeLike}
              order={0}
              liked={likeData.indexOf(card.id) !== -1}
            ></ProductCard>
          );
        })}
      </RecommendList>
    </RecommendLayout>
  );
};

export default Recommend;
