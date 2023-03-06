import axios from "axios";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import { ProductCardProps } from "../../Common/ProductCard/ProductCard";
import ProductCardList from "./ProductCardList";

export interface ProductCardListDataContentType {
  id: number;
  category: string;
  brand: string;
  title: string;
  discountRate: number;
  price: number;
  badges: string[];
  liked: boolean;
  img: string;
}

export interface ProductCardListDataType {
  totalCount: number;
  totalPage: number;
  contents: ProductCardListDataContentType[];
}

interface ProductCardListContainerProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductCardListContainer = ({ condition, setCondition }: ProductCardListContainerProps) => {
  const { category, filter, sort, page } = condition;
  const { data } = useSuspenseQuery<ProductCardListDataType>(
    ["Store", "ProductList", "ProductCardList", category, filter, sort, page],
    `product?category=${category}&filter=${filter}&sort=${sort}&page=${page}`,
  );

  const { mutate } = useSetQueryMutate<
    { id: number },
    (data: { totalCount: number; contents: ProductCardProps[] }) => {
      totalCount: number;
      contents: ProductCardProps[];
    }
  >(
    id => axios.post("http://localhost:8000/product", { id }),
    ["Store", "ProductList", "ProductCardList", category, filter, sort, page],
    e => {
      return (data: { totalCount: number; contents: ProductCardProps[] }) => {
        return {
          totalCount: data.totalCount,
          contents: data.contents.map(el => {
            if (el.id === e.data.id) {
              console.log(el.id);
              return { ...el, liked: !el.liked };
            }
            return el;
          }),
        };
      };
    },
  );
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
