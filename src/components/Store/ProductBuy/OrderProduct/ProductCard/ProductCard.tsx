import { ProductType } from "../../../../../atom/buyForm";
import { numberWithCommas } from "../../../../../utils/priceProcess";
import Counter from "../../../../Common/Counter/Counter";
import {
  ProductCardBuyBox,
  ProductCardBuyBoxButton,
  ProductCardBuyBoxText,
  ProductCardImg,
  ProductCardInfoBox,
  ProductCardInfoBoxTop,
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
import deleteImg from "../../../../../assets/images/delete.svg";
interface ProductCardProps {
  changeProduct: (id: string | number) => void;
  changeCount: (id: string | number, type: "minus" | "plus") => void;
  data: ProductType;
  index?: number;
  moveBuyPage?: (index?: number) => void;
  deleteProduct: (id: number) => void;
}

const ProductCard = ({ changeProduct, changeCount, data, index, moveBuyPage, deleteProduct }: ProductCardProps) => {
  return (
    <ProductCardLayout>
      <ProductCardInputBlock>
        <ProductCardInput
          type="checkbox"
          checked={data.selected || false}
          onChange={() => changeProduct(index === undefined ? data.id : index)}
        />
      </ProductCardInputBlock>
      <ProductCardImg src={data.image} />
      <ProductCardInfoBox>
        <ProductCardInfoBoxTop>
          <ProductCardInfoBrand>{data.brand}</ProductCardInfoBrand>
          <img onClick={() => deleteProduct(index as number)} src={deleteImg} />
        </ProductCardInfoBoxTop>
        <ProductCardInfoName>{data.name}</ProductCardInfoName>
        {/*TO-DO : 리스트 형태로 수정하기*/}
        {data.options.map(({ content }, index) => {
          return (
            <ProductCardInfoOptionBox key={index}>
              <ProductCardInfoOptionText>{content}</ProductCardInfoOptionText>
              <ProductCardInfoOptionButton>옵션변경</ProductCardInfoOptionButton>
            </ProductCardInfoOptionBox>
          );
        })}
        <ProductCardInfoButtonBox>
          <ProductCardInfoPrice>{numberWithCommas(Number(data.price))}원</ProductCardInfoPrice>
          <Counter
            count={data.count}
            changeCount={(type: "minus" | "plus") => changeCount(index === undefined ? data.id : index, type)}
          />
        </ProductCardInfoButtonBox>
      </ProductCardInfoBox>
      <ProductCardBuyBox>
        <ProductCardBuyBoxText>
          {numberWithCommas(
            data.count * Number(data.price) +
              data.options.reduce((prev, cur) => {
                if (cur.selected) return prev + Number(cur.price);
                return prev;
              }, 0),
          )}
          원
        </ProductCardBuyBoxText>
        {moveBuyPage ? (
          <ProductCardBuyBoxButton onClick={() => moveBuyPage(index)}>바로구매</ProductCardBuyBoxButton>
        ) : null}
      </ProductCardBuyBox>
    </ProductCardLayout>
  );
};

export default ProductCard;
