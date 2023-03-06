export interface ICategoryList {
  image: string;
  text: string;
  href: string;
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
