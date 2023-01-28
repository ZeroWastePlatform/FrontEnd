import {
  BuyBadgeItem,
  BuyBadgeList,
  BuyButtonBox,
  BuyCircleButton,
  BuyCounter,
  BuyCounterBox,
  BuyCounterItem,
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

interface BuyProps {
  count: number;
  changeCount: (op: string) => void;
  buyProduct: () => void;
  setLiked: () => void;
  setBasket: () => void;
  badges: string[];
  title: string;
  price: string;
  summary: string;
  liked: string;
}

const Buy = ({
  count,
  changeCount,
  buyProduct,
  setLiked,
  setBasket,
  badges,
  title,
  price,
  summary,
  liked,
}: BuyProps) => {
  return (
    <BuyLayout>
      <BuyBadgeList>
        {badges.map(badge => (
          <BuyBadgeItem key={badge}>{badge}</BuyBadgeItem>
        ))}
      </BuyBadgeList>
      <BuyProductName>{title}</BuyProductName>
      <BuyPrice>{price}원</BuyPrice>
      <BuyInfo>{summary}</BuyInfo>
      <BuyShipBox>
        <BuyShipText>
          혜택 <i>{Math.floor(Number(price) * 0.05)}p</i> 적립
        </BuyShipText>
        <BuyShipText>배송 3,000원 (50,000원 이상 무료배송) | 도서산간 배송비 추가</BuyShipText>
      </BuyShipBox>
      <BuyCounterBox>
        <BuyCounterTitle>수량</BuyCounterTitle>
        <BuyCounter>
          <BuyCounterItem onClick={() => changeCount("minus")}>-</BuyCounterItem>
          <BuyCounterItem>{count}</BuyCounterItem>
          <BuyCounterItem onClick={() => changeCount("plus")}>+</BuyCounterItem>
        </BuyCounter>
      </BuyCounterBox>
      <BuyTotalPayBox>
        <BuyToalPayItem>주문금액 ({count}개)</BuyToalPayItem>
        <BuyToalPayItem>{price}원</BuyToalPayItem>
      </BuyTotalPayBox>
      <BuyButtonBox>
        <BuyCircleButton onClick={setLiked}>♡{liked}</BuyCircleButton>
        <BuyRoundButton onClick={setBasket}>장바구니</BuyRoundButton>
        <BuyRoundButton onClick={buyProduct}>바로구매</BuyRoundButton>
      </BuyButtonBox>
    </BuyLayout>
  );
};

export default Buy;
