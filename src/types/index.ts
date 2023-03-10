export interface ICategoryList {
  image: string;
  text: string;
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
