import { filterType } from "../../../../../pages/Store/ProductList";
import SelectedProductFilter from "./SelectedProductFilter/SelectedProductFilter";
import { SelectedProductFilterListLayout } from "./SelectedProductFilterList.styles";

interface SelectedProductFilterList {
  selectedFilters: filterType[];
}

const SelectedProductFilterList = ({ selectedFilters }: SelectedProductFilterList) => {
  return (
    <SelectedProductFilterListLayout>
      {selectedFilters.map(({ text, value }) => (
        <SelectedProductFilter name={text} key={value} />
      ))}
    </SelectedProductFilterListLayout>
  );
};

export default SelectedProductFilterList;
