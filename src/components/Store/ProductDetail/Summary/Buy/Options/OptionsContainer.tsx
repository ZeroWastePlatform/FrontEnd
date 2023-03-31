import { useState } from "react";
import Options from "./Options";

interface OptionsContainerProps {
  title: string;
  require: { title: string; price: number }[];
  bonus: { title: string; price: number }[];
  selectOption: () => void;
  selectedOptions: { title: string; price: number; count: number }[];
  totalPrice: number;
}

const OptionsContainer = ({ title, require, bonus }: OptionsContainerProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{ title: string; price: number; count: number }[]>([]);

  const totalPrice = selectedOptions.reduce((prev, { price, count }) => prev + price * count, 0);

  const selectOption = (value: string) => {
    const requireIndex = require.findIndex(option => value === option.title);
    const bonusIndex = bonus.findIndex(option => value === option.title);
    const newSelecedOptions = selectedOptions.map(({ title, count, price }) => ({
      title,
      count,
      price,
    }));
    if (requireIndex !== -1) {
      newSelecedOptions.push({ ...require[requireIndex], count: 0 });
    }
    if (bonusIndex !== -1) {
      newSelecedOptions.push({ ...bonus[bonusIndex], count: 0 });
    }
  };

  const deleteOption = (value: string) => {
    const newSelecedOptions = selectedOptions.map(({ title, count, price }) => ({
      title,
      count,
      price,
    }));
    const optionIndex = newSelecedOptions.findIndex(option => value === option.title);
    newSelecedOptions.splice(optionIndex, 1);
  };

  const changeCount = (index: number) => {
    const newSelecedOptions = selectedOptions.map(({ title, count, price }) => ({
      title,
      count,
      price,
    }));
    return (type: "minus" | "plus") => {
      if (type === "minus") {
        newSelecedOptions[index].count -= 1;
      } else {
        newSelecedOptions[index].count += 1;
      }
      setSelectedOptions(newSelecedOptions);
    };
  };

  return (
    <Options
      title={title}
      require={require}
      bonus={bonus}
      totalPrice={totalPrice}
      selectOption={selectOption}
      deleteOption={deleteOption}
      changeCount={changeCount}
      selectedOptions={selectedOptions}
    ></Options>
  );
};

export default OptionsContainer;
