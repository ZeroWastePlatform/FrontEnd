import { atom } from "recoil";
import uuid from "react-uuid";

export interface WriteFormAtomType {
  kind: number;
  title: string;
  content: string;
  price?: number;
  hashtag: string | string[];
  images?: {
    id: string;
    file: File;
    src: string;
  }[];
}

export const writeFormAtom = atom<WriteFormAtomType>({
  key: "writeForm",
  default: {
    kind: 0,
    title: "",
    content: "",
    price: 0,
    hashtag: "",
    images: [
      {
        id: uuid(),
        file: {} as File,
        src: "",
      },
    ],
  },
});
