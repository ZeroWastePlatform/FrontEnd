import { ICategoryList } from "../types";
import categoryAll from "../assets/images/category-All.png";
import categoryBathroom from "../assets/images/category-bathroom.png";
import categoryEat from "../assets/images/category-eat.png";
import categoryGift from "../assets/images/category-gift.png";
import categoryHobby from "../assets/images/category-hobby.png";
import categoryKitchen from "../assets/images/category-kitchen.png";
import categoryLiving from "../assets/images/category-living.png";
import categoryPet from "../assets/images/category-pet.png";
import categoryStationery from "../assets/images/category-stationery.png";
import categoryWomen from "../assets/images/category-women.png";

export const getCategoryList = () => {
  const categoryList: ICategoryList[] = [
    {
      image: categoryAll,
      text: "전체",
      en: "ALL",
    },
    {
      image: categoryEat,
      text: "식품",
      en: "FOOD",
    },
    {
      image: categoryKitchen,
      text: "주방",
      en: "KITCHEN",
    },
    {
      image: categoryBathroom,
      text: "욕실",
      en: "BATH",
    },
    {
      image: categoryLiving,
      text: "생활",
      en: "LIFE",
    },
    {
      image: categoryHobby,
      text: "취미",
      en: "HOBBY",
    },
    {
      image: categoryGift,
      text: "선물",
      en: "GIFT",
    },
    {
      image: categoryWomen,
      text: "여성용품",
      en: "WOMAN",
    },
    {
      image: categoryPet,
      text: "반려동물",
      en: "PET",
    },
    {
      image: categoryStationery,
      text: "문구",
      en: "STATIONERY",
    },
  ];
  return categoryList;
};
