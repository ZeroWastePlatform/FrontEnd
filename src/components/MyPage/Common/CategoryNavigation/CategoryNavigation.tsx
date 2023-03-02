import { Link } from "react-router-dom";
import { CategoryNavigationItem, CategoryNavigationLayout, CategoryNavigationRow } from "./CategoryNavigation.style";

interface MyProps {
  categoryNav: string[];
  selectCategoryNav: string;
  setSelectCategoryNav: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryNavigation = ({ categoryNav, selectCategoryNav, setSelectCategoryNav }: MyProps) => {
  return (
    <CategoryNavigationLayout>
      <CategoryNavigationRow>
        {categoryNav.map(category => (
          <CategoryNavigationItem key={category} isSelected={selectCategoryNav === category}>
            <Link to={`/mypage?category=${category}`} onClick={() => setSelectCategoryNav(category)}>
              {category}
            </Link>
          </CategoryNavigationItem>
        ))}
      </CategoryNavigationRow>
    </CategoryNavigationLayout>
  );
};

export default CategoryNavigation;
