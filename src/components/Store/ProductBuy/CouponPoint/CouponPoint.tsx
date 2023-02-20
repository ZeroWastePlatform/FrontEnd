import SubTitle from "../Common/SubTitle/SubTitle";
import {
  CouponPointButton,
  CouponPointInput,
  CouponPointInputBox,
  CouponPointLayout,
  CouponPointList,
  CouponPointSubBox,
  CouponPointsubTitle,
  CouponPointText,
} from "./CouponPoint.styles";

interface CouponPointProps {
  inputRef: React.RefObject<HTMLInputElement>;
  changeHandler: () => void;
  changeMaxPoint: () => void;
}

const CouponPoint = ({ inputRef, changeHandler, changeMaxPoint }: CouponPointProps) => {
  return (
    <CouponPointLayout>
      <SubTitle>쿠폰/포인트</SubTitle>
      <CouponPointList>
        <CouponPointSubBox>
          <CouponPointsubTitle>쿠폰</CouponPointsubTitle>
          <CouponPointInputBox>
            <CouponPointInput placeholder="보유쿠폰 0장" />
            <CouponPointButton>쿠폰적용</CouponPointButton>
          </CouponPointInputBox>
        </CouponPointSubBox>
        <CouponPointSubBox>
          <CouponPointsubTitle>포인트</CouponPointsubTitle>
          <CouponPointInputBox>
            <CouponPointInput defaultValue={0} ref={inputRef} onChange={changeHandler} />
            <CouponPointButton onClick={changeMaxPoint}>모두사용</CouponPointButton>
          </CouponPointInputBox>
          <CouponPointText>사용가능 포인트 3000p</CouponPointText>
        </CouponPointSubBox>
      </CouponPointList>
    </CouponPointLayout>
  );
};

export default CouponPoint;
