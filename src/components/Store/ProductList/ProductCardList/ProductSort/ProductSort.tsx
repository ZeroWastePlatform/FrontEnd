import { conditionType, setConditionType } from "../../../../../pages/Store/ProductList";
import { ProductSortLayout, ProductSortRow, ProductSortText } from "./ProductSort.styles";

interface ProductSortProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductSort = ({ condition, setCondition }: ProductSortProps) => {
  return (
    <ProductSortLayout>
      <ProductSortRow>
        {["인기순", "신상품순", "낮은가격순", "높은가격순"].map(e => (
          <ProductSortText key={e} same={e === condition.sort} onClick={() => setCondition({ ...condition, sort: e })}>
            {e}
          </ProductSortText>
        ))}
      </ProductSortRow>
    </ProductSortLayout>
  );
};

export default ProductSort;
