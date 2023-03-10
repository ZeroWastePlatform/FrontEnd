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
        {sortData.map((element, index) => (
          <ProductSortText
            key={index}
            same={element === condition.sort}
            onClick={() => setCondition({ ...condition, sort: element, page: 1 })}
          >
            {element}
          </ProductSortText>
        ))}
      </ProductSortRow>
    </ProductSortLayout>
  );
};

export default ProductSort;

const sortData = ["인기순", "|", "신상품순", "|", "낮은가격순", "|", "높은가격순"];
