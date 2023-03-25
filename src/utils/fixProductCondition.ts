import { category, conditionType } from "../pages/Store/ProductList";

const fixProductCondition = (condition: conditionType) => {
  const newCondition = { ...condition };
  if (condition.category === "ALL") {
    newCondition.category = null;
  }
  if (condition.category === "TOP6") {
    newCondition.category = newCondition.sort as category;
    newCondition.sort = "TOP6";
  }
  newCondition.page -= 1;
  return newCondition;
};

export default fixProductCondition;
