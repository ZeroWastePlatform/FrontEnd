import axios from "axios";
import useSetQueryMutate from "../../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import { ProductCardProps } from "../../Common/ProductCard/ProductCard";
import ProductCardList from "./ProductCardList";

export interface ProductCardListDataType {
  totalCount: number;
  contents: {
    id: number;
    category: string;
    brand: string;
    title: string;
    discountRate: string;
    price: string;
    badges: string[];
    liked: boolean;
  }[];
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
  return <ProductCardList data={data} condition={condition} setCondition={setCondition} changeLiked={mutate} />;
};

export default ProductCardListContainer;
