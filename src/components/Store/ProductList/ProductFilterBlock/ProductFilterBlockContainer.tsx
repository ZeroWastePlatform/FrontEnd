import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import ProductFilterBlock from "./ProductFilterBlock";

export type filter = { text: string; value: string; name: string };
interface ProductFilterBlockProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductFilterBlockContainer = ({ condition, setCondition }: ProductFilterBlockProps) => {
  /* TO-DO : 체크박스를 삭제해도 된다고 하면 코드제거하기 */
  // const setCheckboxFilter = (clickedFilter: filterType) => {
  //   const filtered = condition.filter.filter(el => {
  //     if (el.value === clickedFilter.value) return false;
  //     return true;
  //   });

  //   if (filtered.length === condition.filter.length) {
  //     setCondition({ ...condition, filter: [...condition.filter, clickedFilter] });
  //   } else {
  //     setCondition({ ...condition, filter: filtered });
  //   }
  // };

  const setFilter = (clickedFilter: filter) => {
    const { name, value } = clickedFilter;
    setCondition({ ...condition, [name]: condition[name] === value ? null : value });
  };

  /* TO-DO : 삭제필터를 삭제해도 된다고 하면 코드 제거하기 */
  // const deleteFilter = (clickedFilter: filterType) => {
  //   const filtered = condition.filter.filter(el => {
  //     if (el.value === clickedFilter.value) return false;
  //     return true;
  //   });
  //   setCondition({ ...condition, filter: [...filtered] });
  // };

  /* TO-DO : 체크박스를 삭제해도 된다고 하면 코드제거하기 */
  // const selectedCheck = (text: string) => {
  //   const filtered = condition.filter.filter(el => {
  //     if (el.text === text) return true;
  //     return false;
  //   });
  //   if (filtered.length === 1) return true;
  //   return false;
  // };

  const isSelected = (name: string, value: string) => {
    if (condition[name] === value) return true;
    return false;
  };

  /* TO-DO : 삭제필터를 삭제해도 된다고 하면 코드 제거하기 */
  // const resetFilter = () => {
  //   setCondition({ ...condition, filter: [] });
  // };

  return <ProductFilterBlock condition={condition} setFilter={setFilter} isSelected={isSelected} />;
};

export default ProductFilterBlockContainer;
