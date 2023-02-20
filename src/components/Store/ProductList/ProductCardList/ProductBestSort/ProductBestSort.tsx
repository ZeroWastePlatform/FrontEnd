import { conditionType, setConditionType } from "../../../../../pages/Store/ProductList";
import { ProductBestSortLayout, ProductBestSortOption, ProductBestSortSelect } from "./ProductBestSort.styles";

interface ProductBestSortProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductBestSort = ({ condition, setCondition }: ProductBestSortProps) => {
  return (
    <ProductBestSortLayout>
      <ProductBestSortSelect onChange={e => setCondition({ ...condition, sort: e.target.value })}>
        {["식품", "주방", "욕실", "생활", "취미", "선물", "여성용품", "반려동물", "문구"].map(e => (
          <ProductBestSortOption key={e}>{e}</ProductBestSortOption>
        ))}
      </ProductBestSortSelect>
    </ProductBestSortLayout>
  );
};

export default ProductBestSort;
