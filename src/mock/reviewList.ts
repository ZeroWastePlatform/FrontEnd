export type content = {
  avatar: string;
  nickname: string;
  rate: number;
  date: string;
  liked: true;
  likedCount: number;
  content: string;
  photo: string[];
};

export interface review {
  avgrate: number;
  rates: number[];
  total: number;
  totalPage: number;
  content: content[];
}

const review = {
  avgrate: 4.4,
  rates: [5, 2, 1, 1, 1],
  total: 10,
  totalPage: 4,
  content: [
    {
      avatar: "/image/profile1.png",
      nickname: "그린어스",
      rate: 4,
      date: "2023.12.31",
      liked: true,
      likedCount: 99,
      content: "거품도 잘 나고 배송도 빠르네요! 아주 만족합니다.",
      photo: ["/image/comment1.png", "/image/comment2.png", "/image/comment3.png"],
    },
    {
      avatar: "/image/profile2.png",
      nickname: "Green0190",
      rate: 1,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "잘 쓰겠습니다",
      photo: [],
    },
    {
      avatar: "/image/profile3.png",
      nickname: "ZERO",
      rate: 2,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "빠른 배송 감사합니다. 추천합니다",
      photo: ["/image/comment4.png", "/image/comment5.png"],
    },
    {
      avatar: "/image/profile2.png",
      nickname: "Green0190",
      rate: 5,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "잘 쓰겠습니다",
      photo: ["/image/comment4.png"],
    },
    {
      avatar: "/image/profile3.png",
      nickname: "ZERO",
      rate: 3,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "너무 좋습니다 다음에 또 구매하고 싶습니다",
      photo: [],
    },
    {
      avatar: "/image/profile3.png",
      nickname: "ZERO",
      rate: 5,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "너무 좋습니다 다음에 또 구매하고 싶습니다",
      photo: [],
    },
    {
      avatar: "/image/profile2.png",
      nickname: "Green0190",
      rate: 5,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "잘 쓰겠습니다",
      photo: [],
    },
    {
      avatar: "/image/profile1.png",
      nickname: "그린어스",
      rate: 5,
      date: "2023.12.31",
      liked: true,
      likedCount: 99,
      content: "설명과 똑같은 제품 감사합니다.",
      photo: ["/image/comment1.png", "/image/comment3.png"],
    },
    {
      avatar: "/image/profile3.png",
      nickname: "ZERO",
      rate: 4,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "빠른 배송 감사합니다. 추천합니다",
      photo: ["/image/comment5.png"],
    },
    {
      avatar: "/image/profile1.png",
      nickname: "그린어스",
      rate: 5,
      date: "2023.12.31",
      liked: true,
      likedCount: 99,
      content: "다른사람에게 추천하고싶습니다.",
      photo: ["/image/comment1.png", "/image/comment2.png"],
    },
  ],
};

const getReview: (sort: string, page: number) => () => Promise<review> = (sort: string, page: number) => {
  return () =>
    new Promise(resolve => {
      setTimeout(() => {
        const content: content[] = JSON.parse(JSON.stringify(review.content));
        if (sort === "베스트순") {
          content.sort((a, b) => b.rate - a.rate);
        } else {
          content.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
        resolve({
          avgrate: 4.4,
          rates: [5, 2, 1, 1, 1],
          total: 10,
          totalPage: 4,
          content: content.slice((page - 1) * 3, page * 3),
        });
      }, 500);
    });
};

export default getReview;
