export interface ICategoryList {
  image: string;
  text: string;
}

export interface UserInfoType {
  isLogin: boolean;
  couponCnt: number;
  level: number;
  name: string;
  nickname: string;
  point: number;
  zzimCnt: number;
}
export interface UserInfoResponseType {
  myPageProfileResponse: UserInfoType;
}

export type AgreeList = {
  id: number;
  text: string;
  description: string;
}[];
