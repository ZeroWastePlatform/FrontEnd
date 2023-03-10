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
      <ProductCardImg src={`https://zerowasteproduct.herokuapp.com${data.thumnail}`} />
      <ProductCardInfoBox>
        <ProductCardInfoBoxTop>
          <ProductCardInfoBrand>{data.brand}</ProductCardInfoBrand>
          <img onClick={() => deleteProduct(data.id)} src={deleteImg} />
        </ProductCardInfoBoxTop>
        <ProductCardInfoName>{data.name}</ProductCardInfoName>
        <ProductCardInfoButtonBox>
          <ProductCardInfoPrice>{numberWithCommas(Number(data.price))}원</ProductCardInfoPrice>
          <Counter
            count={data.count}
            changeCount={(type: "minus" | "plus") => changeCount(index === undefined ? data.id : index, type)}
          />
        </ProductCardInfoButtonBox>
      </ProductCardInfoBox>
      <ProductCardBuyBox>
        <ProductCardBuyBoxText>{numberWithCommas(data.count * Number(data.price))}원</ProductCardBuyBoxText>
        {moveBuyPage ? (
          <ProductCardBuyBoxButton onClick={() => moveBuyPage(index)}>바로구매</ProductCardBuyBoxButton>
        ) : null}
      </ProductCardBuyBox>
    </ProductCardLayout>
  );
};

export default ProductCard;
