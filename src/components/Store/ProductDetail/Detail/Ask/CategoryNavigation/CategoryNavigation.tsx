import { CategoryNavigationItem, CategoryNavigationLayout } from "./CategoryNavigation.styles";

interface CategoryNavigationProps {
  sort: string;
  changeSort: (sort: string) => void;
  counts: number[];
}

const CategoryNavigation = ({ sort, changeSort, counts }: CategoryNavigationProps) => {
  return (
    <CategoryNavigationLayout>
      {[
        `전체(${counts[0]})`,
        `제품문의(${counts[1]})`,
        `재입고문의(${counts[2]})`,
        `배송문의(${counts[3]})`,
        `기타(${counts[4]})`,
      ].map((el, index) => (
        <CategoryNavigationItem
          key={el}
          selected={sort === "전체" && index === 0 ? true : sort === el}
          onClick={() => {
            changeSort(el);
          }}
        >
          {el}
        </CategoryNavigationItem>
      ))}
    </CategoryNavigationLayout>
  );
};
export default CategoryNavigation;
