import { BuyButtonLayout, BuyButtonText } from "./BuyButton.styles";

interface BuyButtonProps {
  totalPrice: number;
  buyProduct: () => void;
}

const BuyButton = ({ totalPrice, buyProduct }: BuyButtonProps) => {
  return (
    <BuyButtonLayout onClick={buyProduct}>
      <BuyButtonText>{totalPrice}원 결제하기</BuyButtonText>
    </BuyButtonLayout>
  );
};

export default BuyButton;
