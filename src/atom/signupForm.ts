import { atom, selector } from "recoil";
import { AgreeList } from "../types";

interface SignupFormType {
  nickName: string;
  checkedList: AgreeList;
}

export const signupFormAtom = atom<SignupFormType>({
  key: "signupForm",
  default: {
    nickName: "",
    checkedList: [],
  },
});

export const nickNameSelector = selector({
  key: "nickNameSelector",
  get: ({ get }) => get(signupFormAtom).nickName,
  set: ({ get, set }, newValue) => {
    const currentForm = get(signupFormAtom);
    const newForm = {
      ...currentForm,
      nickName: newValue,
    };
    set(signupFormAtom, newForm);
  },
});

export const checkedListSelector = selector({
  key: "checkedListSelector",
  get: ({ get }) => get(signupFormAtom).checkedList,
  set: ({ get, set }, newValue) => {
    const currentForm = get(signupFormAtom);
    const newForm = {
      ...currentForm,
      checkedList: newValue,
    };
    set(signupFormAtom, newForm);
  },
});
