import { atom, selector } from "recoil";

export const selectValueAtom = atom({
  key: "selectValue",
  default: "",
});

export const selectValueSelector = selector({
  key: "selectValueSelector",
  get: ({ get }) => {
    const selectValue = get(selectValueAtom);
    switch (selectValue) {
      case "자유게시판":
        return 1;
      case "중고거래":
        return 2;
      case "정보공유":
        return 3;
    }
    return 0;
  },
});
