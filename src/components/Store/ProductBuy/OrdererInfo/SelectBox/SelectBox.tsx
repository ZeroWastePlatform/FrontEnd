import { SelectBoxLayout, SelectBoxOption } from "./SelectBox.styles";

interface SelectBoxProps {
  elementRef: React.RefObject<HTMLSelectElement>;
  changeHandler: () => void;
}

const SelectBox = ({ elementRef, changeHandler }: SelectBoxProps) => {
  return (
    <SelectBoxLayout ref={elementRef} onChange={changeHandler}>
      <SelectBoxOption value={"naver.com"}>naver.com</SelectBoxOption>
      <SelectBoxOption value={"google.com"}>google.com</SelectBoxOption>
    </SelectBoxLayout>
  );
};

export default SelectBox;
