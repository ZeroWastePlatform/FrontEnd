import React from "react";
import { ICategoryList } from "../../../../types/index";
import { CategoryItemImg, CategoryItemLayout, CategoryItemText } from "./CategoryItem.styles";

interface CategoryItemProps {
  category: ICategoryList;
}

const CategoryItem = ({ category: { image, text } }: CategoryItemProps) => {
  return (
    <CategoryItemLayout to={`/store?category=${text}`}>
      <CategoryItemImg src={image} />
      <CategoryItemText>{text}</CategoryItemText>
    </CategoryItemLayout>
  );
};

export default CategoryItem;
