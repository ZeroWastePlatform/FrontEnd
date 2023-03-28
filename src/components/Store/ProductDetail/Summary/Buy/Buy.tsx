import { discountPrice, numberWithCommas } from "../../../../../utils/priceProcess";
import Counter from "../../../../Common/Counter/Counter";
import { SummaryType } from "../SummaryContainer";
import {
  BuyBadgeItem,
  BuyBadgeList,
  BuyButtonBox,
  BuyCircleButton,
  BuyCircleButtonIcon,
  BuyCounterBox,
  BuyCounterTitle,
  BuyInfo,
  BuyLayout,
  BuyPrice,
  BuyProductName,
  BuyRoundButton,
  BuyShipBox,
  BuyShipText,
  BuyToalPayItem,
  BuyTotalPayBox,
} from "./Buy.styles";

interface BuyProps extends SummaryType {
  count: number;
  changeCount: (op: string) => void;
  buyProduct: () => void;
  setBasket: () => void;
  changeLike: (productId: number) => Promise<void>;
}

const Buy = ({
  id,
  count,
  changeCount,
  buyProduct,
  setBasket,
  brand,
  badges,
  title,
  price,
  description,
  likeCount,
  changeLike,
  discountRate,
  deliveryFee,
}: BuyProps) => {
  //"♡"
  return (
    <BuyLayout>
      <BuyBadgeList>
        {badges.split("_").map(badge => (
          <BuyBadgeItem key={badge} type={badge}>
            {badge}
          </BuyBadgeItem>
        ))}
      </BuyBadgeList>
      <BuyProductName>
        [{brand}] {title}
      </BuyProductName>
      <BuyPrice>
        {discountRate !== 0 ? <i>{numberWithCommas(price)}</i> : null}
        {numberWithCommas(discountPrice({ price, discountRate }))}원
      </BuyPrice>
      <BuyInfo>{description}</BuyInfo>
      <BuyShipBox>
        <BuyShipText>
          혜택 <i>{Math.floor(Number(price) * 0.05)}p</i> 적립
        </BuyShipText>
        <BuyShipText>
          {deliveryFee === 0 ? "무료배송" : `배송 ${numberWithCommas(deliveryFee)}원 (50,000원 이상 무료배송)}`} |
          <p>도서산간 배송비 추가</p>
        </BuyShipText>
      </BuyShipBox>
      <BuyCounterBox>
        <BuyCounterTitle>수량</BuyCounterTitle>
        <Counter count={count} changeCount={changeCount} />
      </BuyCounterBox>
      <BuyTotalPayBox>
        <BuyToalPayItem>주문금액 ({count}개)</BuyToalPayItem>
        <BuyPrice>{numberWithCommas(Number(price) * count)}원</BuyPrice>
      </BuyTotalPayBox>
      <BuyButtonBox>
        <BuyCircleButton onClick={() => changeLike(id)}>
          <BuyCircleButtonIcon liked={"true"}>{"♥"}</BuyCircleButtonIcon>
          {likeCount}
        </BuyCircleButton>
        <BuyRoundButton onClick={setBasket} filled={"false"}>
          장바구니
        </BuyRoundButton>
        <BuyRoundButton onClick={buyProduct} filled={"true"}>
          바로구매
        </BuyRoundButton>
      </BuyButtonBox>
    </BuyLayout>
  );
};

export default Buy;

const badgeList = ["BEST", "NEW", "SALE"];
