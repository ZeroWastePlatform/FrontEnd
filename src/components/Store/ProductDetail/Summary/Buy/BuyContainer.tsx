import axios from "axios";
import { useQueryClient } from "react-query";
import { ProductType } from "../../../../../atom/buyForm";
import useLoginCheck from "../../../../../hooks/useLoginCheck";
import useSetQueryMutate from "../../../../../hooks/useSetQueryMutate";
import { SummaryType } from "../SummaryContainer";
import Buy from "./Buy";
import useBuy from "./BuyHook";
interface BuyContainerProps {
  data: SummaryType;
}

const BuyContainer = ({ data }: BuyContainerProps) => {
  const { id, count, changeCount, buyProduct } = useBuy();
  const queryClient = useQueryClient();
  const islogin = useLoginCheck();
  const { mutate: basketMutate } = useSetQueryMutate<{ id: number }, (data: ProductType[]) => ProductType[]>(
    id => axios.post("http://localhost:8000/basket", { id }),
    ["Store", "Basket", "ProductList", "1"],
    e => {
      return (data: ProductType[]) => {
        const duplication = data.filter(el => {
          if (Number(el.id) === e.data.id) true;
          return false;
        });
        if (duplication) {
          alert("이미 장바구니에 포함되어있습니다");
          return data;
        } else {
          const summary = queryClient.getQueryData<SummaryType>([
            "Store",
            "ProductDetail",
            "summary",
            "1",
          ]) as SummaryType;
          const basket = queryClient.getQueryData<ProductType[]>(["my", "baskey", "1"]);
          const product = {
            id: Number(id),
            selected: true,
            image: summary.thumnail[0],
            brand: summary.brand,
            name: summary.title,
            price: summary.price,
            count,
            options: summary.options.map(content => ({ content, price: 0, selected: true })),
          };
          if (basket === undefined) {
            return [product];
          } else {
            return [...basket, product];
          }
        }
      };
    },
  );

  const { mutate: likedMutate } = useSetQueryMutate(
    id => axios.post("http://localhost:8000/liked", { id }),
    ["Store", "ProductDetail", "summary", "Buy", "liked", id],
  );

  return (
    <Buy
      {...data}
      count={count}
      changeCount={changeCount}
      buyProduct={buyProduct}
      setBasket={() => {
        if (islogin) {
          basketMutate(id);
        } else {
          alert("로그인을 해주세요");
        }
      }}
      setLiked={() => {
        if (islogin) {
          likedMutate(id);
        } else {
          alert("로그인을 해주세요");
        }
      }}
    ></Buy>
  );
};

export default BuyContainer;
