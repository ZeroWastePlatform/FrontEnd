import {
  SelectedProductFilterDeleteIcon,
  SelectedProductFilterLayout,
  SelectedProductFilterName,
} from "./SelectedProductFilter.styles";
import deleteImg from "../../../../../../assets/images/delete.svg";
import { filterType } from "../../../../../../pages/Store/ProductList";
interface SelectedProductFilterProps {
  filterData: filterType;
  deleteFilter: (clickedFilter: filterType) => void;
}
const SelectedProductFilter = ({ filterData, deleteFilter }: SelectedProductFilterProps) => {
  return (
    <SelectedProductFilterLayout onClick={() => deleteFilter(filterData)}>
      <SelectedProductFilterName>{filterData.text}</SelectedProductFilterName>
      <SelectedProductFilterDeleteIcon src={deleteImg} />
    </SelectedProductFilterLayout>
  );
};

export default SelectedProductFilter;
