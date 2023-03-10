import { numberWithCommas } from "../../../../../utils/priceProcess";
import Counter from "../../../../Common/Counter/Counter";
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
import heartImg from "../../../../../assets/images/heart.svg";

interface BuyProps {
  id: number;
  count: number;
  changeCount: (op: string) => void;
  buyProduct: () => void;
  setBasket: () => void;
  brand: string;
  badges: number;
  title: string;
  price: number;
  summary: string;
  liked: boolean;
  productLike: string[];
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
  summary,
  liked,
  productLike,
  changeLike,
}: BuyProps) => {
  return (
    <BuyLayout>
      <BuyBadgeList>
        {badges
          .toString(2)
          .split("")
          .map((bool, index) => {
            if (bool === "1") return badgeList[index];
            return "false";
          })
          .filter(el => el !== "false")
          .map(badge => (
            <BuyBadgeItem key={badge} type={badge}>
              {badge}
            </BuyBadgeItem>
          ))}
      </BuyBadgeList>
      <BuyProductName>
        [{brand}] {title}
      </BuyProductName>
      <BuyPrice>{numberWithCommas(Number(price))}원</BuyPrice>
      <BuyInfo>{summary}</BuyInfo>
      <BuyShipBox>
        <BuyShipText>
          혜택 <i>{Math.floor(Number(price) * 0.05)}p</i> 적립
        </BuyShipText>
        <BuyShipText>
          배송 3,000원 (50,000원 이상 무료배송) | <p>도서산간 배송비 추가</p>
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
          <BuyCircleButtonIcon liked={liked ? "true" : "false"}>{liked ? "♥" : "♡"}</BuyCircleButtonIcon>
          {productLike.length}
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
