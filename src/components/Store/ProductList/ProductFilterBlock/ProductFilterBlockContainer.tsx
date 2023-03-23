import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import ProductFilterBlock from "./ProductFilterBlock";

export type filter = { text: string; value: string; name: string };
interface ProductFilterBlockProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductFilterBlockContainer = ({ condition, setCondition }: ProductFilterBlockProps) => {
  const setFilter = (clickedFilter: filter) => {
    const { name, value } = clickedFilter;
    setCondition({ ...condition, [name]: condition[name] === value ? null : value });
  };

  const isSelected = (name: string, value: string) => {
    if (condition[name] === value) return true;
    return false;
  };

  return <ProductFilterBlock condition={condition} setFilter={setFilter} isSelected={isSelected} />;
};

export default ProductFilterBlockContainer;
