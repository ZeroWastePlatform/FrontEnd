import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import ProductCard from "../../../Common/ProductCard/ProductCard";
import { RecommendLayout, RecommendList, RecommendTitle } from "./Recommend.styles";
import { RecommendDataType } from "./RecommendContainer";

interface RecommendProps {
  data: RecommendDataType;
  recommendRef: React.RefObject<HTMLDivElement>;
  changeLiked: UseMutateFunction<AxiosResponse<unknown, unknown>, unknown, unknown, unknown>;
}

const Recommend = ({ data, recommendRef, changeLiked }: RecommendProps) => {
  return (
    <RecommendLayout ref={recommendRef}>
      <RecommendTitle>이런 제품은 어떠세요?</RecommendTitle>
      <RecommendList>
        {data.map((card, index) => {
          return <ProductCard {...card} key={index} changeLiked={changeLiked}></ProductCard>;
        })}
      </RecommendList>
    </RecommendLayout>
  );
};

export default Recommend;
