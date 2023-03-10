import { atom } from "recoil";

export interface WriteFormAtomType {
  kind: number;
  title: string;
  content: string;
  price?: number;
  hashtag: string | string[];
}

export const writeFormAtom = atom<WriteFormAtomType>({
  key: "writeForm",
  default: {
    kind: 0,
    title: "",
    content: "",
    price: 0,
    hashtag: "",
  },
});
