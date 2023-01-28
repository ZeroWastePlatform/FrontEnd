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
        {data.contents.map(content => (
          <ProductCard {...content} key={content.id} changeLiked={changeLiked} />
        ))}
      </ProductCardListGrid>
    </ProductCardListLayout>
  );
};

export default ProductCardList;
