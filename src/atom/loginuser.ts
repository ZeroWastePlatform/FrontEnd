import { atom } from "recoil";

interface LoginUserAtomType {
  login: boolean;
}

export const isLoginUserAtom = atom<LoginUserAtomType>({
  key: "userInfo",
  default: {
    login: false,
  },
});
