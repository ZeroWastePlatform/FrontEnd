import InputBoxContainer from "../Common/InputBox/InputBoxContainer";
import SubTitle from "../Common/SubTitle/SubTitle";
import {
  ShipInfoAddressInput,
  ShipInfoAddressSearchButton,
  ShipInfoCheckbox,
  ShipInfoCol,
  ShipInfoLayout,
  ShipInfoPostCodeStyle,
} from "./ShipInfo.styles";

interface ShipInfoProps {
  onCompletePost: (data: any) => void;
  isOpenPost: boolean;
  setIsOpenPost: React.Dispatch<React.SetStateAction<boolean>>;
  adress1: React.RefObject<HTMLInputElement>;
  adress2: React.RefObject<HTMLInputElement>;
}

const ShipInfo = ({ onCompletePost, isOpenPost, setIsOpenPost, adress1, adress2 }: ShipInfoProps) => {
  return (
    <ShipInfoLayout>
      <SubTitle>배송지 정보</SubTitle>
      <ShipInfoCol>
        <ShipInfoCheckbox>
          <input type="checkbox" /> 주문자 정보와 동일
        </ShipInfoCheckbox>
        <InputBoxContainer title={{ ko: "배송지명", en: "shipname" }}></InputBoxContainer>
        <InputBoxContainer title={{ ko: "받는 사람", en: "getPersonName" }}></InputBoxContainer>
        <InputBoxContainer title={{ ko: "연락처", en: "getPersonPhone" }}></InputBoxContainer>
        <InputBoxContainer title={{ ko: "주소", en: "address1" }}>
          <ShipInfoAddressSearchButton onClick={() => setIsOpenPost(true)}>우편번호 검색</ShipInfoAddressSearchButton>
        </InputBoxContainer>
        <ShipInfoAddressInput ref={adress1} />
        <ShipInfoAddressInput ref={adress2} />
        <ShipInfoAddressInput />
        <ShipInfoCheckbox>
          <input type="checkbox" /> 기본 배송지 저장
        </ShipInfoCheckbox>
      </ShipInfoCol>
      {isOpenPost ? <ShipInfoPostCodeStyle autoClose onComplete={onCompletePost} /> : null}
    </ShipInfoLayout>
  );
};

export default ShipInfo;
