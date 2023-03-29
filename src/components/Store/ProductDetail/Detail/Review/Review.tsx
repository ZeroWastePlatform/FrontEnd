import { review } from "../../../../../mock/reviewList";
import PagenationContainer from "../../../../Common/Pagenation/PagenationContainer";
import { ReviewCol, ReviewLayout, ReviewTitle } from "./Review.styles";
import ReviewList from "./ReviewList/ReviewList";
import ReviewSort from "./ReviewSort/ReviewSort";
import Status from "./Status/Status";

interface ReviewProps {
  page: number;
  setPage: (page: number) => void;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  reviewRef: React.RefObject<HTMLDivElement>;
  data: review;
}

const Review = ({
  data: { avgrate, rates, content, totalPage, total },
  sort,
  setSort,
  page,
  setPage,
  reviewRef,
}: ReviewProps) => {
  return (
    <ReviewLayout ref={reviewRef}>
      <ReviewCol>
        <ReviewTitle>리뷰({total})</ReviewTitle>
        <Status avgrate={avgrate} rates={rates} total={total}></Status>
        <ReviewSort sort={sort} setSort={setSort} />
        <ReviewList data={content}></ReviewList>
        <PagenationContainer page={page} setPage={setPage} totalPage={totalPage} unit={9} />
      </ReviewCol>
    </ReviewLayout>
  );
};

export default Review;
