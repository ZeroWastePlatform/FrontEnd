import InputBoxContainer from "../Common/InputBox/InputBoxContainer";
import SubTitle from "../Common/SubTitle/SubTitle";
import {
  ShipInfoAddressInput,
  ShipInfoAddressInputBlock,
  ShipInfoAddressInputTitle,
  ShipInfoAddressSearchButton,
  ShipInfoCol,
  ShipInfoLayout,
} from "./ShipInfo.styles";
import ZipCodeModal from "./ZipCodeModal/ZipCodeModal";

interface ShipInfoProps {
  onCompletePost: (data: any) => void;
  isOpenPost: boolean;
  changePostStatus: () => void;
  address1Ref: React.RefObject<HTMLInputElement | HTMLSelectElement>;
  address2Ref: React.RefObject<HTMLInputElement | HTMLSelectElement>;
  address1Hander: () => void;
  address2Hander: () => void;
}

const ShipInfo = ({
  onCompletePost,
  isOpenPost,
  changePostStatus,
  address1Ref,
  address2Ref,
  address1Hander,
  address2Hander,
}: ShipInfoProps) => {
  return (
    <ShipInfoLayout>
      <SubTitle>배송지 정보</SubTitle>
      <ShipInfoCol>
        {/*TO-DO : 주문자 정보 연동하기*/}
        {/* <ShipInfoCheckbox>
          <input type="checkbox" /> 주문자 정보와 동일
        </ShipInfoCheckbox> */}
        <InputBoxContainer title={{ ko: "배송지명", en: "shipname" }}></InputBoxContainer>
        <InputBoxContainer title={{ ko: "받는 사람", en: "getPersonName" }}></InputBoxContainer>
        <InputBoxContainer title={{ ko: "연락처", en: "getPersonPhone" }}></InputBoxContainer>
        <ShipInfoAddressInputBlock>
          <ShipInfoAddressInputTitle>주소</ShipInfoAddressInputTitle>
          <ShipInfoAddressInput
            ref={address1Ref as React.RefObject<HTMLInputElement>}
            type={"short"}
            onChange={address1Hander}
          />
          <ShipInfoAddressSearchButton onClick={changePostStatus}>우편번호 검색</ShipInfoAddressSearchButton>
        </ShipInfoAddressInputBlock>
        <ShipInfoAddressInput
          ref={address2Ref as React.RefObject<HTMLInputElement>}
          type={"long"}
          onChange={address2Hander}
        />
        <InputBoxContainer title={{ ko: "", en: "address3" }} width={"474px"}></InputBoxContainer>
        {/* <ShipInfoCheckbox>
          <input type="checkbox" /> 기본 배송지 저장
        </ShipInfoCheckbox> */}
      </ShipInfoCol>
      {isOpenPost ? <ZipCodeModal onComplete={onCompletePost} changePostStatus={changePostStatus} /> : null}
    </ShipInfoLayout>
  );
};

export default ShipInfo;
