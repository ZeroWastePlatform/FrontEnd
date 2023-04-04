import { ProductFilterBlockCol, ProductFilterBlockLayout } from "./ProductFilterBlock.styles";
import { filter } from "./ProductFilterBlockContainer";
import filterList from "./ProductFilterData";
import StoreFilterRow from "./ProductFilterRow/ProductFilterRow";

interface ProductFilterBlockProps {
  setFilter: (clickedFilter: filter) => void;
  isSelected: (name: string, value: string) => boolean;
}

const ProductFilterBlock = ({ setFilter, isSelected }: ProductFilterBlockProps) => {
  return (
    <ProductFilterBlockLayout>
      <ProductFilterBlockCol>
        {filterList.map(({ title, list }) => (
          <StoreFilterRow title={title} list={list} setFilter={setFilter} key={title} isSelected={isSelected} />
        ))}
      </ProductFilterBlockCol>
    </ProductFilterBlockLayout>
  );
};

export default ProductFilterBlock;
