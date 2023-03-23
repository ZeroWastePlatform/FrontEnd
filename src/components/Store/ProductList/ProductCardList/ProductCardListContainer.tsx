import axios from "axios";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import fixProductCondition from "../../../../utils/fixProductCondition";
import { ProductCardProps } from "../../Common/ProductCard/ProductCard";
import ProductCardList from "./ProductCardList";

export interface ProductCardListDataContentType {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: number;
  price: number;
  badges: string;
  thumbnail: string;
}

export interface ProductCardListDataType {
  totalElements: number;
  totalPage: number;
  content: ProductCardListDataContentType[];
}

interface ProductCardListContainerProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductCardListContainer = ({ condition, setCondition }: ProductCardListContainerProps) => {
  const { category, sort, page, brand, price, productStatus } = condition;
  const { data } = useSuspenseQuery<ProductCardListDataType>(
    ["Store", "ProductList", "ProductCardList", category, sort, page, brand, price, productStatus],
    `product${fixProductCondition(condition)}`,
  );

  // const { mutate } = useSetQueryMutate<
  //   { id: number },
  //   (data: { totalCount: number; contents: ProductCardProps[] }) => {
  //     totalCount: number;
  //     contents: ProductCardProps[];
  //   }
  // >(
  //   id => axios.post("http://localhost:8000/product", { id }),
  //   ["Store", "ProductList", "ProductCardList", category, filter, sort, page],
  //   e => {
  //     return (data: { totalCount: number; contents: ProductCardProps[] }) => {
  //       return {
  //         totalCount: data.totalCount,
  //         contents: data.contents.map(el => {
  //           if (el.id === e.data.id) {
  //             return { ...el, liked: !el.liked };
  //           }
  //           return el;
  //         }),
  //       };
  //     };
  //   },
  // );

  const setPage = (page: number) => {
    setCondition({ ...condition, page });
  };

  return (
    <ProductCardList
      data={data}
      condition={condition}
      setCondition={setCondition}
      changeLiked={mutate}
      setPage={setPage}
    />
  );
};

export default ProductCardListContainer;
