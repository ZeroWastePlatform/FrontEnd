import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectValueAtom } from "../../../atom/SelectValue";
import { CustomSelectBox, CustomSelectItem, CustomSelectLabel, CustomSelectList } from "./CustomSelect.styles";

interface CustomSelectProps {
  initialValue: string;
  options: string[];
}

const CustomSelect = ({ initialValue, options }: CustomSelectProps) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const [selectValue, setSelectValue] = useRecoilState(selectValueAtom);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectValue(e.currentTarget.innerText);
    setIsShowOption(prev => !prev);
  };

  useEffect(() => {
    setSelectValue(initialValue);
  }, []);
  return (
    <CustomSelectBox>
      <CustomSelectLabel onClick={() => setIsShowOption(prev => !prev)} show={isShowOption}>
        {selectValue}
      </CustomSelectLabel>
      <CustomSelectList show={isShowOption}>
        {options.map((option, idx) => (
          <CustomSelectItem key={idx} onClick={handleClick}>
            {option}
          </CustomSelectItem>
        ))}
      </CustomSelectList>
    </CustomSelectBox>
  );
};

export default CustomSelect;
