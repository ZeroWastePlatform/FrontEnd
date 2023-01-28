import StoreFilterCheckBox from "./CheckBoxFilter/CheckBoxFilter";
import StoreFilterRadio from "./RadioFilter/RadioFilter";
import { ProductFilterRowLayout, ProductFilterRowList, ProductFilterRowTitle } from "./ProductFilterRow.styles";
import { filterType } from "../../../../../pages/Store/ProductList";

interface ProductFilterRowProps {
  title: string;
  list: { text: string; value: string; name?: string }[];
  setCheckboxFilter: (clickedFilter: filterType) => void;
  setRadioFilter: (clickedFilter: filterType) => void;
}

const ProductFilterRow = ({ title, list, setCheckboxFilter, setRadioFilter }: ProductFilterRowProps) => {
  return (
    <ProductFilterRowLayout>
      <ProductFilterRowTitle>{title}</ProductFilterRowTitle>
      <ProductFilterRowList>
        {list.map(({ text, value, name }) =>
          name ? (
            <StoreFilterRadio text={text} value={value} name={name} key={text} setRadioFilter={setRadioFilter} />
          ) : (
            <StoreFilterCheckBox text={text} value={value} key={text} setCheckboxFilter={setCheckboxFilter} />
          ),
        )}
      </ProductFilterRowList>
    </ProductFilterRowLayout>
  );
};

export default ProductFilterRow;
