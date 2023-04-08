import {
  AccountBox,
  AccountSpan,
  Add,
  AddressDetailInfoInput,
  AddressInfoInput,
  AddText,
  AdressBox,
  DeliveryInfoCol,
  DeliveryInfoParagraph,
  KakaoBox,
  KakaoEmailSpan,
  LocateAddButton,
  LocateBox,
  LocateDeleteButton,
  LocateInfoInput,
  LocateInfoRow,
  LocateRow,
  LocateSettingCol,
  LocateSettingParagraph,
  MembeInfoSection,
  MembeInfoParagraph,
  MemberInfoEditButton,
  MemberInfoLayout,
  NickNameCol,
  NickNameInput,
  NickNameParagraph,
  NickNameText,
  PostCodeBox,
  PostCodeButton,
  PostCodeInput,
  RequiredItemSpan,
} from "./MemberInfo.style";
import KakaoImg from "../../../assets/images/kakao.svg";
import { useRef, useState } from "react";
import ZipCodeModal from "../../Common/ZipCodeModal/ZipCodeModal";
import customAPI from "../../../lib/customAPI";

interface IMemberInfoProps {
  onCompletePost: (data: any) => void;
  isOpenPost: boolean;
  changePostStatus: () => void;
  address1Ref: React.RefObject<HTMLInputElement | HTMLSelectElement>;
  address2Ref: React.RefObject<HTMLInputElement | HTMLSelectElement>;
  address1Hander: () => void;
  address2Hander: () => void;
}

const MemberInfo = ({
  onCompletePost,
  isOpenPost,
  changePostStatus,
  address1Ref,
  address2Ref,
  address1Hander,
  address2Hander,
}: IMemberInfoProps) => {
  const [nickName, setNickName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [inputValue, setInputValue] = useState("");
  const [locates, setLocates] = useState<string[]>([]);

  const addressRef = useRef<HTMLInputElement>(null);
  const accessToken = localStorage.getItem("accessToken");

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const nickNameRule = /^[a-zA-Z0-9가-힣]+$/;

    if (!nickNameRule.test(inputVal)) {
      setErrorMsg("닉네임에 특수문자 사용은 불가합니다.");
    } else {
      setNickName(inputVal);
      setErrorMsg("");
    }
  };

  const myInfoModifyAPI = async () => {
    const payload = new FormData();
    const address = {
      zipCode: address1Ref?.current?.value,
      address: address2Ref?.current?.value,
      addressDetail: addressRef?.current?.value,
    };

    payload.append("nickname", nickName);
    payload.append("interestArea", locates);
    payload.append("address", address);

    const result = await customAPI.post("members/me", payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const handleLocate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePlusClick = () => {
    setLocates([...locates, inputValue]);
    setInputValue("");
  };

  const handleDelete = (locateInfo: string) => {
    if (locates) {
      setLocates(locates.filter(locate => locate !== locateInfo));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    myInfoModifyAPI();
  };

  return (
    <MemberInfoLayout>
      <MembeInfoParagraph>회원정보설정</MembeInfoParagraph>

      <AccountBox>
        <AccountSpan>*연결된 계정</AccountSpan>
        <RequiredItemSpan>*필수항목</RequiredItemSpan>
      </AccountBox>

      <KakaoBox>
        <KakaoEmailSpan>greenus@kakao.com</KakaoEmailSpan>
      </KakaoBox>

      {/* <ProfileParagraph>프로필 사진</ProfileParagraph> */}

      <MembeInfoSection>
        {/* <ProfileImageCol>
          <img src="" alt="" />

          <ProfileButtonBox>
            <ProfileEditButton>변경</ProfileEditButton>
            <ProfileDeleteButton>삭제</ProfileDeleteButton>
          </ProfileButtonBox>
        </ProfileImageCol> */}

        <NickNameCol>
          <NickNameParagraph>*닉네임</NickNameParagraph>
          <NickNameText>{errorMsg}</NickNameText>
          <NickNameInput onChange={handleNickName} />
        </NickNameCol>

        <DeliveryInfoCol>
          <DeliveryInfoParagraph>*배송지 정보</DeliveryInfoParagraph>

          <PostCodeBox>
            <PostCodeInput ref={address1Ref as React.RefObject<HTMLInputElement>} onChange={address1Hander} />
            <PostCodeButton onClick={changePostStatus}>우편번호 검색</PostCodeButton>
          </PostCodeBox>
          <AddressInfoInput ref={address2Ref as React.RefObject<HTMLInputElement>} onChange={address2Hander} />

          {isOpenPost ? <ZipCodeModal onComplete={onCompletePost} changePostStatus={changePostStatus} /> : null}

          <AdressBox>
            <AddressDetailInfoInput ref={addressRef} />
          </AdressBox>
        </DeliveryInfoCol>

        <LocateSettingCol>
          <LocateSettingParagraph>지역 설정</LocateSettingParagraph>

          <LocateInfoRow>
            <LocateInfoInput placeholder="내 지역을 입력해주세요" onChange={handleLocate} value={inputValue} />

            <LocateAddButton onClick={handlePlusClick} disabled={!inputValue.length}>
              <AddText>추가</AddText>
              <Add>+</Add>
            </LocateAddButton>
          </LocateInfoRow>

          <LocateRow>
            {locates.map(locate => {
              return (
                <LocateBox key={locate}>
                  {locate}
                  <LocateDeleteButton onClick={() => handleDelete(locate)}>x</LocateDeleteButton>
                </LocateBox>
              );
            })}
          </LocateRow>
        </LocateSettingCol>

        {/* <CurrentLocationButton>현재 위치로 찾기</CurrentLocationButton> */}
      </MembeInfoSection>

      <MemberInfoEditButton onClick={handleSubmit}>회원정보 수정</MemberInfoEditButton>
    </MemberInfoLayout>
  );
};

export default MemberInfo;
