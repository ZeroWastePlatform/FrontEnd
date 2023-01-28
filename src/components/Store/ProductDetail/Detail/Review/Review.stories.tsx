import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Review from "./Review";

export default {
  title: "Store/ProductDetail/Detail/Review",
  component: Review,
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = args => <Review {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  page: 1,
  setPage: action("페이지이동"),
  sort: "베스트순",
  setSort: action("정렬변경"),
  data: {
    avgrate: 3.6,
    rates: [1000, 200, 30, 3, 1],
    total: 1234,
    content: [
      {
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
      {
        avatar: "http://localhost:8000/images/test1.jpg",
        nickname: "그린어스",
        rate: 1,
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
      {
        avatar: "http://localhost:8000/images/test1.jpg",
        nickname: "그린어스",
        rate: 2,
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
      {
        avatar: "http://localhost:8000/images/test1.jpg",
        nickname: "그린어스",
        rate: 5,
        date: "2023.01.03",
        liked: true,
        likedCount: 10,
        content:
          "거품도 잘 나고 배송도 빠르네요! 아주 만족합니다. 거품도 잘 나고 배송도 빠르네요! 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑",
        photo: [],
      },
      {
        avatar: "http://localhost:8000/images/test1.jpg",
        nickname: "그린어스",
        rate: 3,
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
    ],
  },
};
