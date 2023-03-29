import { CategoryNavigationItem, CategoryNavigationLayout } from "./CategoryNavigation.styles";

interface CategoryNavigationProps {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  counts: number[];
  setPage: (page: number) => void;
}

const CategoryNavigation = ({ sort, setSort, setPage, counts }: CategoryNavigationProps) => {
  return (
    <CategoryNavigationLayout>
      {[
        `전체(${counts[0]})`,
        `제품문의(${counts[1]})`,
        `재입고문의(${counts[2]})`,
        `배송문의(${counts[3]})`,
        `기타(${counts[4]})`,
      ].map(el => (
        <CategoryNavigationItem
          key={el}
          selected={sort === el}
          onClick={() => {
            setSort(el);
            setPage(1);
          }}
        >
          {el}
        </CategoryNavigationItem>
      ))}
    </CategoryNavigationLayout>
  );
};
export default CategoryNavigation;
