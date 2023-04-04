import { ReviewSortItem, ReviewSortLayout } from "./ReviewSort.styles";

interface ReviewSortProps {
  sort: string;
  changeSort: (sort: string) => void;
}

const ReviewSort = ({ sort, changeSort }: ReviewSortProps) => {
  return (
    <ReviewSortLayout>
      {["베스트순", "최신순"].map(el => (
        <ReviewSortItem key={el} selected={sort === el} onClick={() => changeSort(el)}>
          {el}
        </ReviewSortItem>
      ))}
    </ReviewSortLayout>
  );
};

export default ReviewSort;
