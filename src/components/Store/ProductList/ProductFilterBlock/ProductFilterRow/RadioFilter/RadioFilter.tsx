import { filterType } from "../../../../../../pages/Store/ProductList";
import { RadioFilterInput, RadioFilterLabel, RadioFilterLayout } from "./RadioFilter.styles";

interface RadioFilterProps {
  text: string;
  name: string;
  value: string;
  setRadioFilter: (clickedFilter: filterType) => void;
  checked: boolean;
}

const RadioFilter = ({ text, name, value, setRadioFilter, checked }: RadioFilterProps) => {
  return (
    <RadioFilterLayout>
      <RadioFilterInput
        type="radio"
        id={text}
        name={name}
        value={value}
        checked={checked}
        onClick={() => setRadioFilter({ name, value, text })}
      />
      <RadioFilterLabel htmlFor={text}>{text}</RadioFilterLabel>
    </RadioFilterLayout>
  );
};

export default RadioFilter;
