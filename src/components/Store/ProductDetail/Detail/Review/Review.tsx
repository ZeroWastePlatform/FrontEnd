import { review } from "../../../../../mock/reviewList";
import PagenationContainer from "../../../../Common/Pagenation/PagenationContainer";
import { ReviewCol, ReviewLayout, ReviewTitle } from "./Review.styles";
import ReviewList from "./ReviewList/ReviewList";
import ReviewSort from "./ReviewSort/ReviewSort";
import Status from "./Status/Status";

interface ReviewProps {
  data: review;
  sort: string;
  page: number;
  changeSort: (sort: string) => void;
  changePage: (page: number) => void;
  reviewRef: React.RefObject<HTMLDivElement>;
}

const Review = ({
  data: { avgrate, rates, content, totalPage, total },
  sort,
  page,
  changeSort,
  changePage,
  reviewRef,
}: ReviewProps) => {
  return (
    <ReviewLayout ref={reviewRef}>
      <ReviewCol>
        <ReviewTitle>리뷰({total})</ReviewTitle>
        <Status avgrate={avgrate} rates={rates} total={total}></Status>
        <ReviewSort sort={sort} changeSort={changeSort} />
        <ReviewList data={content}></ReviewList>
        <PagenationContainer page={page} changePage={changePage} totalPage={totalPage} unit={9} />
      </ReviewCol>
    </ReviewLayout>
  );
};

export default Review;
