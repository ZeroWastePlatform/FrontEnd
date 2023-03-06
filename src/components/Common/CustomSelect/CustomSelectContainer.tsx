import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectValueAtom } from "../../../atom/selectValue";
import CustomSelect from "./CustomSelect";

interface CustomSelectContainerProps {
  initialValue: string;
  options: string[];
}

const CustomSelectContainer = ({ initialValue, options }: CustomSelectContainerProps) => {
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
    <CustomSelect
      options={options}
      handleClick={handleClick}
      selectValue={selectValue}
      isShowOption={isShowOption}
      setIsShowOption={setIsShowOption}
    />
  );
};

export default CustomSelectContainer;
