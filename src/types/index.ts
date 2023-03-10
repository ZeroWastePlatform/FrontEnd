export interface ICategoryList {
  image: string;
  text: string;
}

export interface PostType {
  id: number;
  kind: number;
  title: string;
  content: string;
  price?: number;
  viewCnt: number;
  replyCnt: number;
  recommendCnt: number;
  createdAt: string;
  hashtags: string[];
}
export interface PostListType {
  content: PostType[];
}
export interface UserInfoType {
  isLogin: boolean;
  id: null | number;
  couponCnt: number;
  level: number;
  name: string;
  nickname: string;
  point: number;
  zzimCnt: number;
  like: number[];
}
export interface UserInfoResponseType {
  myPageProfileResponse: UserInfoType;
}

export type AgreeList = {
  id: number;
  text: string;
  description: string;
}[];

export interface RecommendationsPostType {
  id: number;
  kind: number;
  title: string;
  content: string;
}

export interface PopularityPostType {
  id: number;
  title: string;
  recommendCnt: number;
}
