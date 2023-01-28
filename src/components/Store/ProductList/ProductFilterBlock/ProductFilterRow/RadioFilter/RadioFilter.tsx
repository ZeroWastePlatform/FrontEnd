import { filterType, setConditionType } from "../../../../../../pages/Store/ProductList";
import { RadioFilterInput, RadioFilterLabel, RadioFilterLayout } from "./RadioFilter.styles";

interface RadioFilterProps {
  text: string;
  name: string;
  value: string;
  setRadioFilter: (clickedFilter: filterType) => void;
}

const RadioFilter = ({ text, name, value, setRadioFilter }: RadioFilterProps) => {
  return (
    <RadioFilterLayout>
      <RadioFilterInput
        type="radio"
        id={text}
        name={name}
        value={value}
        onClick={() => setRadioFilter({ name, value, text })}
      />
      <RadioFilterLabel htmlFor={text}>{text}</RadioFilterLabel>
    </RadioFilterLayout>
  );
};

export default RadioFilter;
