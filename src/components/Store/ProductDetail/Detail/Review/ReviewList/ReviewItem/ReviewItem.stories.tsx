import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReviewItem from "./ReviewItem";

export default {
  title: "Store/ProductDetail/Detail/Review/ReviewItem",
  component: ReviewItem,
} as ComponentMeta<typeof ReviewItem>;

const Template: ComponentStory<typeof ReviewItem> = args => <ReviewItem {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  review: {
    avatar: "http://localhost:8000/images/test1.jpg",
    nickname: "그린어스",
    rate: 5,
    date: "2023.01.03",
    liked: true,
    likedCount: 10,
    content:
      "거품도 잘 나고 배송도 빠르네요! 아주 만족합니다. 거품도 잘 나고 배송도 빠르네요! 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑",
    photo: [
      "http://localhost:8000/images/test1.jpg",
      "http://localhost:8000/images/test2.jpg",
      "http://localhost:8000/images/test3.jpg",
    ],
  },
};
