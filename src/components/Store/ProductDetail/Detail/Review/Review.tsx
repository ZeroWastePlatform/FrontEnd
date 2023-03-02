import Pagenation from "../../../../Common/Pagenation/Pagenation";
import PagenationContainer from "../../../../Common/Pagenation/PagenationContainer";
import { ReviewCol, ReviewLayout, ReviewTitle } from "./Review.styles";
import { ReviewDataType } from "./ReviewContainer";
import ReviewList from "./ReviewList/ReviewList";
import ReviewSort from "./ReviewSort/ReviewSort";
import Status from "./Status/Status";

interface ReviewProps {
  page: number;
  setPage: (page: number) => void;
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
        <PagenationContainer page={page} setPage={setPage} totalPage={9} unit={9} />
      </ReviewCol>
    </ReviewLayout>
  );
};

export default Review;
