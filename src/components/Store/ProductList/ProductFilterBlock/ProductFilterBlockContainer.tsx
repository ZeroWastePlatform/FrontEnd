import { conditionType, filterType, setConditionType } from "../../../../pages/Store/ProductList";
import ProductFilterBlock from "./ProductFilterBlock";

interface ProductFilterBlockProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductFilterBlockContainer = ({ condition, setCondition }: ProductFilterBlockProps) => {
  const setCheckboxFilter = (clickedFilter: filterType) => {
    const filtered = condition.filter.filter(el => {
      if (el.value === clickedFilter.value) return false;
      return true;
    });

    if (filtered.length === condition.filter.length) {
      setCondition({ ...condition, filter: [...condition.filter, clickedFilter] });
    } else {
      setCondition({ ...condition, filter: filtered });
    }
  };

  const setRadioFilter = (clickedFilter: filterType) => {
    const filtered = condition.filter.filter(el => {
      if (el.name === clickedFilter.name) return false;
      return true;
    });

    setCondition({ ...condition, filter: [...filtered, clickedFilter] });
  };

  return (
    <ProductFilterBlock condition={condition} setCheckboxFilter={setCheckboxFilter} setRadioFilter={setRadioFilter} />
  );
};

export default ProductFilterBlockContainer;
