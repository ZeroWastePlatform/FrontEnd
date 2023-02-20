import StoreSort from "./ProductSort/ProductSort";
import {
  ProductCardListGrid,
  ProductCardListLayout,
  ProductCardListTopBox,
  ProductCardListTotalText,
} from "./ProductCardList.styles";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import { ProductCardListDataType } from "./ProductCardListContainer";
import { UseMutateFunction } from "react-query";
import { AxiosResponse } from "axios";
import Pagenation from "../../../Common/Pagenation/Pagenation";

interface ProductCardListProps {
  data: ProductCardListDataType;
  condition: conditionType;
  setCondition: setConditionType;
  changeLiked: UseMutateFunction<AxiosResponse<unknown, unknown>, unknown, unknown, unknown>;
}

const ProductCardList = ({ data, condition, setCondition, changeLiked }: ProductCardListProps) => {
  return (
    <ProductCardListLayout>
      <ProductCardListTopBox>
        <ProductCardListTotalText>전체 {data.totalCount}개</ProductCardListTotalText>
        <StoreSort condition={condition} setCondition={setCondition} />
      </ProductCardListTopBox>
      <ProductCardListGrid>
        {(condition.category === "베스트" ? data.contents.slice(0, 6) : data.contents).map(content => (
          <ProductCard {...content} key={content.id} changeLiked={changeLiked} />
        ))}
      </ProductCardListGrid>
      {condition.category === "베스트" ? null : (
        <Pagenation curpage={condition.page} pagelist={[1, 2, 3, 4, 5]} movePage={setCondition} />
      )}
    </ProductCardListLayout>
  );
};

export default ProductCardList;
