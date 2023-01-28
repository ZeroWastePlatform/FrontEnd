import { ReviewDataContentType } from "../ReviewContainer";
import ReviewItem from "./ReviewItem/ReviewItem";
import { ReviewListLayout } from "./ReviewList.styles";

interface ReviewListProps {
  data: ReviewDataContentType[];
}

const ReviewList = ({ data }: ReviewListProps) => {
  return (
    <ReviewListLayout>
      {data.map((review, index) => {
        return <ReviewItem review={review} key={index} />;
      })}
    </ReviewListLayout>
  );
};

export default ReviewList;
