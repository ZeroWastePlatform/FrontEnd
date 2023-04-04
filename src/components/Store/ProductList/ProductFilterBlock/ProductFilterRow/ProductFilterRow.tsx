import { filter } from "../ProductFilterBlockContainer";
import { ProductFilterRowLayout, ProductFilterRowList, ProductFilterRowTitle } from "./ProductFilterRow.styles";
import RadioFilter from "./RadioFilter/RadioFilter";

interface ProductFilterRowProps {
  title: string;
  list: filter[];
  setFilter: (clickedFilter: filter) => void;
  isSelected: (name: string, value: string) => boolean;
}

const ProductFilterRow = ({ title, list, setFilter, isSelected }: ProductFilterRowProps) => {
  return (
    <ProductFilterRowLayout>
      <ProductFilterRowTitle>{title}</ProductFilterRowTitle>
      <ProductFilterRowList>
        {list.map(({ text, value, name }) => (
          <RadioFilter
            text={text}
            value={value}
            name={name}
            key={text}
            setFilter={setFilter}
            checked={isSelected(name, value)}
          />
        ))}
      </ProductFilterRowList>
    </ProductFilterRowLayout>
  );
};

export default ProductFilterRow;
