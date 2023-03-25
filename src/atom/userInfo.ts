import { atom } from "recoil";
import { UserInfoType } from "../types";

export const userInfoAtom = atom<UserInfoType>({
  key: "userInfo",
  default: {
    accessToken: "",
    isLogin: false,
    id: null,
    couponCnt: 0,
    level: 0,
    name: "",
    nickname: "",
    point: 0,
    zzimCnt: 0,
    like: [],
  },
});
