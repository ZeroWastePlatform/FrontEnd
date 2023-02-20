// atoms.ts
import { atom, selector } from "recoil";

export interface ProductType {
  id: string;
  selected: boolean;
  image: string;
  brand: string;
  name: string;
  price: string;
  count: number;
  options: { content: string; price: string; selected: boolean }[];
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
    product: [
      {
        id: "1",
        selected: true,
        image: "test.jpg",
        brand: "동구밭",
        name: "올바른 샴푸바 쿨링용",
        price: "9500",
        count: 1,
        options: [{ content: "비누망 추가 구매 (+1,000원)", price: "1000", selected: true }],
      },
      {
        id: "2",
        selected: true,
        image: "test.jpg",
        brand: "아로마티카",
        name: "로즈마리 헤어 씨크닝 컨디셔너바 115g",
        price: "22000",
        count: 1,
        options: [],
      },
      {
        id: "3",
        selected: true,
        image: "test.jpg",
        brand: "율립",
        name: "비건 립밤",
        price: "27000",
        count: 1,
        options: [{ content: "[필수옵션] 코랄", price: "0", selected: true }],
      },
    ],
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
