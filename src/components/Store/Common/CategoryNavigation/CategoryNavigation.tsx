import { Link } from "react-router-dom";
import { category, conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import { CategoryNavigationItem, CategoryNavigationLayout, CategoryNavigationRow } from "./CategoryNavigation.styles";
import { theme } from "../../../../styles/theme";
import { ThemeProvider } from "styled-components";
interface CategoryNavigationProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const CategoryNavigation = ({ condition, setCondition }: CategoryNavigationProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CategoryNavigationLayout>
        <CategoryNavigationRow>
          {categoryData.map(category => (
            <CategoryNavigationItem key={category} same={categoryMap[category] === condition.category}>
              <Link
                to={`/store?category=${categoryMap[category]}`}
                onClick={() =>
                  setCondition(
                    category === "베스트"
                      ? { ...condition, category: categoryMap[category], sort: "FOOD" }
                      : { ...condition, category: categoryMap[category] },
                  )
                }
              >
                {category}
              </Link>
            </CategoryNavigationItem>
          ))}
        </CategoryNavigationRow>
      </CategoryNavigationLayout>
    </ThemeProvider>
  );
};

export default CategoryNavigation;

const categoryData = ["베스트", "전체", "식품", "주방", "욕실", "생활", "취미", "선물", "여성용품", "반려동물", "문구"];

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
