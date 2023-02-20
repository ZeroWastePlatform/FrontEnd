import { Link } from "react-router-dom";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import { CategoryNavigationItem, CategoryNavigationLayout, CategoryNavigationRow } from "./CategoryNavigation.styles";

interface CategoryNavigationProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const CategoryNavigation = ({ condition, setCondition }: CategoryNavigationProps) => {
  console.log(condition);
  return (
    <CategoryNavigationLayout>
      <CategoryNavigationRow>
        {[
          "베스트",
          "전체",
          "식품",
          "주방",
          "욕실",
          "생활",
          "취미",
          "선물",
          "여성용품",
          "반려동물",
          "문구",
          "이벤트",
        ].map(category => (
          <CategoryNavigationItem key={category} same={category === condition.category}>
            <Link
              to={`/store?category=${category}`}
              onClick={() =>
                setCondition(
                  category == "베스트" ? { ...condition, category, sort: "식품" } : { ...condition, category },
                )
              }
            >
              {category}
            </Link>
          </CategoryNavigationItem>
        ))}
      </CategoryNavigationRow>
    </CategoryNavigationLayout>
  );
};

export default CategoryNavigation;
