import React from "react";
import { CustomSelectBox, CustomSelectItem, CustomSelectLabel, CustomSelectList } from "./CustomSelect.styles";

interface CustomSelectProps {
  options: string[];
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
          <CustomSelectItem key={idx} onClick={handleClick}>
            {option}
          </CustomSelectItem>
        ))}
      </CustomSelectList>
    </CustomSelectBox>
  );
};

export default CustomSelect;
