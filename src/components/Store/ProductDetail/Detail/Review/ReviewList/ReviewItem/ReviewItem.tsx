import { ReviewDataContentType } from "../../ReviewContainer";
import {
  ReviewItemContent,
  ReviewItemDate,
  ReviewItemImg,
  ReviewItemImgList,
  ReviewItemLayout,
  ReviewItemLikeButton,
  ReviewItemLikeCount,
  ReviewItemRate,
  ReviewItemTopBox,
  ReviewItemTopLeftBottomBox,
  ReviewItemTopLeftBox,
  ReviewItemTopRightBox,
  ReviewItemUserAvatar,
  ReviewItemUserNickname,
} from "./ReviewItem.styles";
import colorStar from "../../../../../../../assets/images/star.svg";
import grayStar from "../../../../../../../assets/images/star-gray.svg";

interface ReviewItemProps {
  review: ReviewDataContentType;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <ReviewItemLayout>
      <ReviewItemTopBox>
        <ReviewItemUserAvatar src={`https://zerowasteproduct.herokuapp.com${review.avatar}`} />
        <ReviewItemTopLeftBox>
          <ReviewItemUserNickname>{review.nickname}</ReviewItemUserNickname>
          <ReviewItemTopLeftBottomBox>
            <ReviewItemRate>
              {new Array(5).fill(0).map((_, index) => {
                if (index + 1 <= review.rate) return <img src={colorStar} key={index} />;
                return <img src={grayStar} key={index} />;
              })}
            </ReviewItemRate>
            <ReviewItemDate>{review.date}</ReviewItemDate>
          </ReviewItemTopLeftBottomBox>
        </ReviewItemTopLeftBox>
        <ReviewItemTopRightBox>
          <ReviewItemLikeButton selected={review.liked}>도움이 돼요</ReviewItemLikeButton>
          <ReviewItemLikeCount>
            <i>{review.likedCount}명</i>에게 도움이되었습니다
          </ReviewItemLikeCount>
        </ReviewItemTopRightBox>
      </ReviewItemTopBox>
      <ReviewItemContent>{review.content}</ReviewItemContent>
      <ReviewItemImgList>
        {review.photo.map(src => {
          return <ReviewItemImg src={`https://zerowasteproduct.herokuapp.com${src}`} key={src} />;
        })}
      </ReviewItemImgList>
    </ReviewItemLayout>
  );
};

export default ReviewItem;
