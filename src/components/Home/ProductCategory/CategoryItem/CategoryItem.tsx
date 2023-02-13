import React from "react";
import { ICategoryList } from "../../../../types/index";
import { CategoryItemImg, CategoryItemLayout, CategoryItemText } from "./CategoryItem.styles";

interface CategoryItemProps {
  category: ICategoryList;
}

const CategoryItem = ({ category: { image, text, href } }: CategoryItemProps) => {
  return (
    <CategoryItemLayout>
      <CategoryItemImg />
      <CategoryItemText>{text}</CategoryItemText>
    </CategoryItemLayout>
  );
};

export default CategoryItem;
