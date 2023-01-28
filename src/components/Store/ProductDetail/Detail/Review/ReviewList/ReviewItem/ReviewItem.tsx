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

interface ReviewItemProps {
  review: ReviewDataContentType;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <ReviewItemLayout>
      <ReviewItemTopBox>
        <ReviewItemUserAvatar src={review.avatar} />
        <ReviewItemTopLeftBox>
          <ReviewItemUserNickname>{review.nickname}</ReviewItemUserNickname>
          <ReviewItemTopLeftBottomBox>
            <ReviewItemRate>별점 {review.rate}점</ReviewItemRate>
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
          return <ReviewItemImg src={src} key={src} />;
        })}
      </ReviewItemImgList>
    </ReviewItemLayout>
  );
};

export default ReviewItem;
