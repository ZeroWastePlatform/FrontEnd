import Pagenation from "../../../../Common/Pagenation/Pagenation";
import { ReviewCol, ReviewLayout, ReviewTitle } from "./Review.styles";
import { ReviewDataType } from "./ReviewContainer";
import ReviewList from "./ReviewList/ReviewList";
import ReviewSort from "./ReviewSort/ReviewSort";
import Status from "./Status/Status";

interface ReviewProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  reviewRef: React.RefObject<HTMLDivElement>;
  data: ReviewDataType;
}

const Review = ({ data: { avgrate, rates, content, total }, sort, setSort, page, setPage, reviewRef }: ReviewProps) => {
  return (
    <ReviewLayout ref={reviewRef}>
      <ReviewCol>
        <ReviewTitle>리뷰({total})</ReviewTitle>
        <Status avgrate={avgrate} rates={rates} total={total}></Status>
        <ReviewSort sort={sort} setSort={setSort} />
        <ReviewList data={content}></ReviewList>
        <Pagenation curpage={page} pagelist={[1, 2, 3, 4, 5]} movePage={setPage} />
      </ReviewCol>
    </ReviewLayout>
  );
};

export default Review;
