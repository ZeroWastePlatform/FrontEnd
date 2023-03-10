import { atom } from "recoil";

interface LoginUserAtomType {
  login: boolean;
  id?: number;
  like: number[];
}

export const isLoginUserAtom = atom<LoginUserAtomType>({
  key: "userInfo",
  default: {
    login: true,
    id: 1,
    like: [],
  },
});
