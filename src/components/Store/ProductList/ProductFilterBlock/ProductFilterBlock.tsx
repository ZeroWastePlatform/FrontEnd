import { conditionType } from "../../../../pages/Store/ProductList";
import { ProductFilterBlockCol, ProductFilterBlockLayout } from "./ProductFilterBlock.styles";
import { filter } from "./ProductFilterBlockContainer";
import filterList from "./ProductFilterData";
import StoreFilterRow from "./ProductFilterRow/ProductFilterRow";
import SelectedProductFilterList from "./SelectedProductFilterList/SelectedProductFilterList";

interface ProductFilterBlockProps {
  condition: conditionType;
  setFilter: (clickedFilter: filter) => void;
  isSelected: (name: string, value: string) => boolean;
}

const ProductFilterBlock = ({ condition, setFilter, isSelected }: ProductFilterBlockProps) => {
  return (
    <ProductFilterBlockLayout>
      <ProductFilterBlockCol>
        {filterList.map(({ title, list }) => (
          <StoreFilterRow title={title} list={list} setFilter={setFilter} key={title} isSelected={isSelected} />
        ))}
        {/* TO-DO : 삭제필터를 삭제해도 된다고 하면 코드 제거하기 */
        /* <SelectedProductFilterList
          selectedFilters={condition.filter}
          deleteFilter={deleteFilter}
          resetFilter={resetFilter}
        /> */}
      </ProductFilterBlockCol>
    </ProductFilterBlockLayout>
  );
};

export default ProductFilterBlock;
