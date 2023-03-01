import { filterType } from "../../../../../pages/Store/ProductList";
import SelectedProductFilter from "./SelectedProductFilter/SelectedProductFilter";
import {
  SelectedProductFilterListBlock,
  SelectedProductFilterListButton,
  SelectedProductFilterListLayout,
} from "./SelectedProductFilterList.styles";
import resetImg from "../../../../../assets/images/reset.svg";

interface SelectedProductFilterList {
  selectedFilters: filterType[];
  deleteFilter: (clickedFilter: filterType) => void;
  resetFilter: () => void;
}

const SelectedProductFilterList = ({ selectedFilters, deleteFilter, resetFilter }: SelectedProductFilterList) => {
  return (
    <SelectedProductFilterListLayout>
      <SelectedProductFilterListBlock>
        {selectedFilters.map(filterData => (
          <SelectedProductFilter filterData={filterData} key={filterData.value} deleteFilter={deleteFilter} />
        ))}
      </SelectedProductFilterListBlock>
      <SelectedProductFilterListButton onClick={resetFilter}>
        <img src={resetImg} />
        초기화
      </SelectedProductFilterListButton>
    </SelectedProductFilterListLayout>
  );
};

export default SelectedProductFilterList;
