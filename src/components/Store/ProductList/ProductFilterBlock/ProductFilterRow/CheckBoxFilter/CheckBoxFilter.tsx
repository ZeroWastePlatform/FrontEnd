import { filterType } from "../../../../../../pages/Store/ProductList";
import { CheckBoxFilterInput, CheckBoxFilterLabel, CheckBoxFilterLayout } from "./CheckBoxFilter.styles";

interface CheckBoxFilterProps {
  value: string;
  text: string;
  setCheckboxFilter: (clickedFilter: filterType) => void;
}

const CheckBoxFilter = ({ text, value, setCheckboxFilter }: CheckBoxFilterProps) => {
  return (
    <CheckBoxFilterLayout>
      <CheckBoxFilterInput
        type="checkbox"
        id={text}
        value={value}
        onClick={() => setCheckboxFilter({ name: null, value, text })}
      />
      <CheckBoxFilterLabel htmlFor={text}>{text}</CheckBoxFilterLabel>
    </CheckBoxFilterLayout>
  );
};

export default CheckBoxFilter;
