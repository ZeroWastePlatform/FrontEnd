import pay1 from "../../../../assets/images/card.svg";
import pay2 from "../../../../assets/images/coin.svg";
import pay3 from "../../../../assets/images/naver-logo.png";
import pay4 from "../../../../assets/images/kakao-logo.png";
import pay5 from "../../../../assets/images/mobilephone.svg";
import { PayMethodImg, PayMethodLayout, PayMethodPayBox, PayMethodPayBoxList } from "./PayMethod.styles";
import SubTitle from "../Common/SubTitle/SubTitle";

interface PayMethodProps {
  changeMethod: (buyMethod: string) => void;
  buyMethod: string;
}

const PayMethod = ({ changeMethod, buyMethod }: PayMethodProps) => {
  const selectedIndex = payMethodData.findIndex(({ text }) => text === buyMethod);
  console.log(selectedIndex);
  return (
    <PayMethodLayout>
      <SubTitle>결제 수단</SubTitle>
      <PayMethodPayBoxList>
        {[
          { src: pay1, text: "체크/신용카드" },
          { src: pay2, text: "무통장입금" },
          { src: pay3, text: "네이버페이" },
          { src: pay4, text: "카카오페이" },
          { src: pay5, text: "핸드폰" },
        ].map(({ src, text }, index) => {
          return (
            <PayMethodPayBox
              key={text}
              onClick={() => changeMethod(text)}
              selectedIndex={selectedIndex}
              curindex={index}
            >
              <PayMethodImg src={src}></PayMethodImg>
              <div>{text}</div>
            </PayMethodPayBox>
          );
        })}
      </PayMethodPayBoxList>
    </PayMethodLayout>
  );
};

export default PayMethod;

const payMethodData = [
  { src: pay1, text: "체크/신용카드" },
  { src: pay2, text: "무통장입금" },
  { src: pay3, text: "네이버페이" },
  { src: pay4, text: "카카오페이" },
  { src: pay5, text: "핸드폰" },
];
