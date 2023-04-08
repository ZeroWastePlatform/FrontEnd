import React from "react";
import { CustomSelectBox, CustomSelectItem, CustomSelectLabel, CustomSelectList } from "./CustomSelect.styles";

interface CustomSelectProps {
  options: {
    name: string;
    value: string;
  }[];
  selectValue: string;
  isShowOption: boolean;
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  setIsShowOption: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomSelect = ({ options, selectValue, isShowOption, setIsShowOption, handleClick }: CustomSelectProps) => {
  return (
    <CustomSelectBox>
      <CustomSelectLabel onClick={() => setIsShowOption(prev => !prev)} show={isShowOption}>
        {selectValue}
      </CustomSelectLabel>
      <CustomSelectList show={isShowOption}>
        {options?.map((option, idx) => (
          <CustomSelectItem key={idx} data-value={option.value} onClick={handleClick}>
            {option.name}
          </CustomSelectItem>
        ))}
      </CustomSelectList>
    </CustomSelectBox>
  );
};

export default CustomSelect;
