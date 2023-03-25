import { filter } from "../../ProductFilterBlockContainer";
import { RadioFilterInput, RadioFilterLabel, RadioFilterLayout } from "./RadioFilter.styles";

interface RadioFilterProps {
  text: string;
  name: string;
  value: string;
  setFilter: (clickedFilter: filter) => void;
  checked: boolean;
}

const RadioFilter = ({ text, name, value, setFilter, checked }: RadioFilterProps) => {
  return (
    <RadioFilterLayout>
      <RadioFilterInput
        type="radio"
        id={text}
        name={name}
        value={value}
        checked={checked}
<<<<<<< HEAD
        onChange={() => setFilter({ name, value, text })}
=======
        onChange={() => setRadioFilter({ name, value, text })}
>>>>>>> develop
      />
      <RadioFilterLabel htmlFor={text}>{text}</RadioFilterLabel>
    </RadioFilterLayout>
  );
};

export default RadioFilter;
