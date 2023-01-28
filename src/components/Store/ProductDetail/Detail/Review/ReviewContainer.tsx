import useSortPaging from "../../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Review from "./Review";

export interface ReviewDataContentType {
  avatar: string;
  nickname: string;
  rate: number;
  date: string;
  liked: boolean;
  likedCount: number;
  content: string;
  photo: string[];
}

export interface ReviewDataType {
  avgrate: number;
  rates: number[];
  total: number;
  content: ReviewDataContentType[];
}

interface ReviewContainerProps {
  reviewRef: React.RefObject<HTMLDivElement>;
}

const ReviewContainer = ({ reviewRef }: ReviewContainerProps) => {
  const { page, sort, setPage, setSort } = useSortPaging(1, "베스트순");
  const { data } = useSuspenseQuery<ReviewDataType>(
    ["Store", "ProductDetal", "Review", "1", sort, page],
    `review?sort=${sort}&page=${page}`,
  );
  return <Review data={data} sort={sort} page={page} setSort={setSort} setPage={setPage} reviewRef={reviewRef} />;
};

export default ReviewContainer;
