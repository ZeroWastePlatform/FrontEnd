import useFormRecoil from "../../../../../hooks/useFormRecoil";
import SelectBox from "./SelectBox";

const SelectBoxContainer = () => {
  const { changeHandler, elementRef } = useFormRecoil("ordererEmailLast");
  return (
    <SelectBox elementRef={elementRef as React.RefObject<HTMLSelectElement>} changeHandler={changeHandler}></SelectBox>
  );
};

export default SelectBoxContainer;
