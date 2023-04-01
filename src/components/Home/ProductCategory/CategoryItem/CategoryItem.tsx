import React from "react";
import { category } from "../../../../pages/Store/ProductList";
import { ICategoryList } from "../../../../types/index";
import { CategoryItemImg, CategoryItemLayout, CategoryItemText } from "./CategoryItem.styles";

interface CategoryItemProps {
  category: ICategoryList;
}

const CategoryItem = ({ category: { image, text } }: CategoryItemProps) => {
  return (
    <CategoryItemLayout to={`/store?category=${categoryMap[text]}`}>
      <CategoryItemImg src={image} />
      <CategoryItemText>{text}</CategoryItemText>
    </CategoryItemLayout>
  );
};

export default CategoryItem;

const categoryMap: { [key: string]: "TOP6" | "ALL" | category } = {
  베스트: "TOP6",
  전체: "ALL",
  식품: "FOOD",
  주방: "KITCHEN",
  욕실: "BATH",
  생활: "LIFE",
  취미: "HOBBY",
  선물: "GIFT",
  여성용품: "WOMAN",
  반려동물: "PET",
  문구: "STATIONERY",
};
