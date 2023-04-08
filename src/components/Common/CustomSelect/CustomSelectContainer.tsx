import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectValueAtom } from "../../../atom/selectValue";
import CustomSelect from "./CustomSelect";

interface CustomSelectContainerProps {
  initialValue: string;
  options: {
    name: string;
    value: string;
  }[];
  changeSort?: (sort: string) => void;
}

const CustomSelectContainer = ({ initialValue, options, changeSort }: CustomSelectContainerProps) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const [selectValue, setSelectValue] = useRecoilState(selectValueAtom);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectValue(e.currentTarget.innerText);
    setIsShowOption(prev => !prev);

    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    if (changeSort) {
      const optionValue = e.target.dataset["value"];
      changeSort(String(optionValue));
    }
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
