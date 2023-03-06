// atoms.ts
import { atom, selector } from "recoil";

export interface ProductType {
  id: number;
  selected: boolean;
  image: string;
  brand: string;
  name: string;
  price: number;
  count: number;
  options: { content: string; price: number; selected: boolean }[];
}

interface isBuyFormAtomType {
  ordererName: string;
  ordererPhone: string;
  ordererEmailFirst: string;
  ordererEmailLast: string;
  shipname: string;
  getPersonName: string;
  getPersonPhone: string;
  address1: string;
  address2: string;
  address3: string;
  product: ProductType[];
  coupon: string;
  point: number;
  buyMethod: string;
}

export const isBuyFormAtom = atom<isBuyFormAtomType>({
  key: "buyForm",
  default: {
    ordererName: "",
    ordererPhone: "",
    ordererEmailFirst: "",
    ordererEmailLast: "naver.com",
    shipname: "",
    getPersonName: "",
    getPersonPhone: "",
    address1: "",
    address2: "",
    address3: "",
    product: [],
    point: 0,
    coupon: "null",
    buyMethod: "",
  },
});

export const PriceSelector = selector({
  key: "buyFormSelector",
  get: ({ get }) => {
    const { product } = get(isBuyFormAtom);
    if (product.length) {
      return product.reduce((prev, cur) => {
        const optionSum = cur.options.reduce((prev, cur) => {
          if (cur.selected) return prev + Number(cur.price);
          return prev;
        }, 0);
        return prev + optionSum + Number(cur.price) * cur.count;
      }, 0);
    }
    return 0;
  },
});
