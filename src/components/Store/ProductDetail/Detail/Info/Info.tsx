import { useState } from "react";
import { InfoButton, InfoCol, InfoImg, InfoLayout, InfoTitle, InfoWrap } from "./Info.styles";
import bottomArrow from "../../../../../assets/images/bottomArrow.svg";
interface InfoProps {
  infoRef: React.RefObject<HTMLDivElement>;
  image: string;
}

const Info = ({ image, infoRef }: InfoProps) => {
  const [fold, setFold] = useState(true);
  return (
    <InfoLayout ref={infoRef}>
      <InfoCol>
        <InfoTitle>상품정보</InfoTitle>
        <InfoWrap fold={fold}>
          <InfoImg src={image} />
        </InfoWrap>
        <InfoButton onClick={() => setFold(!fold)}>
          상품정보 {fold ? "더보기" : "접기"}
          <img src={bottomArrow} />
        </InfoButton>
      </InfoCol>
    </InfoLayout>
  );
};

export default Info;
