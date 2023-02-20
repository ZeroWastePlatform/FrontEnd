import { ProductType } from "../../../../../atom/buyForm";
import Counter from "../../../../Common/Counter/Counter";
import {
  ProductCardBuyBox,
  ProductCardBuyBoxButton,
  ProductCardBuyBoxText,
  ProductCardImg,
  ProductCardInfoBox,
  ProductCardInfoBrand,
  ProductCardInfoButtonBox,
  ProductCardInfoName,
  ProductCardInfoOptionBox,
  ProductCardInfoOptionButton,
  ProductCardInfoOptionText,
  ProductCardInfoPrice,
  ProductCardInput,
  ProductCardInputBlock,
  ProductCardLayout,
} from "./ProductCard.styles";

interface ProductCardProps {
  changeProduct: (id: string) => void;
  changeCount: (id: string, type: "minus" | "plus") => void;
  data: ProductType;
}

const ProductCard = ({ changeProduct, changeCount, data }: ProductCardProps) => {
  return (
    <ProductCardLayout>
      <ProductCardInputBlock>
        <ProductCardInput type="checkbox" defaultChecked={true} onClick={() => changeProduct(data.id)} />
      </ProductCardInputBlock>
      <ProductCardImg></ProductCardImg>
      <ProductCardInfoBox>
        <ProductCardInfoBrand>{data.brand}</ProductCardInfoBrand>
        <ProductCardInfoName>{data.name}</ProductCardInfoName>
        {data.options.map(({ content }, index) => {
          return (
            <ProductCardInfoOptionBox key={index}>
              <ProductCardInfoOptionText>{content}</ProductCardInfoOptionText>
              <ProductCardInfoOptionButton>옵션변경</ProductCardInfoOptionButton>
            </ProductCardInfoOptionBox>
          );
        })}
        <ProductCardInfoButtonBox>
          <ProductCardInfoPrice>{data.price}원</ProductCardInfoPrice>
          <Counter count={data.count} changeCount={(type: "minus" | "plus") => changeCount(data.id, type)} />
        </ProductCardInfoButtonBox>
      </ProductCardInfoBox>
      <ProductCardBuyBox>
        <ProductCardBuyBoxText>
          {data.count * Number(data.price) +
            data.options.reduce((prev, cur) => {
              if (cur.selected) return prev + Number(cur.price);
              return prev;
            }, 0)}
          원
        </ProductCardBuyBoxText>
        <ProductCardBuyBoxButton>바로구매</ProductCardBuyBoxButton>
      </ProductCardBuyBox>
    </ProductCardLayout>
  );
};

export default ProductCard;
