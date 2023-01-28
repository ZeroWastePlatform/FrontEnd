import { ReviewSortItem, ReviewSortLayout } from "./ReviewSort.styles";

interface ReviewSortProps {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const ReviewSort = ({ sort, setSort }: ReviewSortProps) => {
  return (
    <ReviewSortLayout>
      {["베스트순", "최신순"].map(el => (
        <ReviewSortItem key={el} selected={sort === el} onClick={() => setSort(el)}>
          {el}
        </ReviewSortItem>
      ))}
    </ReviewSortLayout>
  );
};

export default ReviewSort;
