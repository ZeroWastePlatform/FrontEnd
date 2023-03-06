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
import ProductBestSort from "./ProductBestSort/ProductBestSort";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";

interface ProductCardListProps {
  data: ProductCardListDataType;
  condition: conditionType;
  setCondition: setConditionType;
  changeLiked: UseMutateFunction<AxiosResponse<unknown, unknown>, unknown, unknown, unknown>;
  setPage: (page: number) => void;
}

const ProductCardList = ({ data, condition, setCondition, changeLiked, setPage }: ProductCardListProps) => {
  return (
    <ProductCardListLayout>
      <ProductCardListTopBox>
        <ProductCardListTotalText>
          {condition.category === "베스트" ? "베스트순" : `전체 ${data.totalCount}개`}
        </ProductCardListTotalText>
        {condition.category === "베스트" ? (
          <ProductBestSort condition={condition} setCondition={setCondition} />
        ) : (
          <StoreSort condition={condition} setCondition={setCondition} />
        )}
      </ProductCardListTopBox>
      <ProductCardListGrid>
        {(condition.category === "베스트" ? data.contents.slice(0, 6) : data.contents).map((content, index) => (
          <ProductCard
            {...content}
            key={content.id}
            changeLiked={changeLiked}
            order={condition.category === "베스트" && index < 3 ? index + 1 : 0}
          />
        ))}
      </ProductCardListGrid>
      {condition.category === "베스트" ? null : (
        <PagenationContainer page={condition.page} setPage={setPage} totalPage={data.totalPage} unit={9} />
      )}
    </ProductCardListLayout>
  );
};

export default ProductCardList;
