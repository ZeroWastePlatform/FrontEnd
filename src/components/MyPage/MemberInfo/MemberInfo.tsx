import {
  AccountBox,
  AccountSpan,
  Add,
  AddressDetailInfoInput,
  AddressInfoInput,
  AddText,
  AdressBox,
  CurrentLocationButton,
  DeliveryInfoCol,
  DeliveryInfoParagraph,
  DeliverySaveButton,
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
  MembeInfoParagraph,
  MembeInfoSection,
  MemberInfoEditButton,
  MemberInfoLayout,
  NickNameCol,
  NickNameInput,
  NickNameParagraph,
  NickNameText,
  PostCodeBox,
  PostCodeButton,
  PostCodeInput,
  ProfileButtonBox,
  ProfileDeleteButton,
  ProfileEditButton,
  ProfileImageCol,
  ProfileParagraph,
  RequiredItemSpan,
} from "./MemberInfo.style";
import KakaoImg from "../../../assets/images/kakao.svg";
import { useCallback, useState } from "react";

import useDaumPost from "../../../hooks/useDaumPost";
import ZipCodeModal from "../../Common/ZipCodeModal/ZipCodeModal";

const MemberInfo = () => {
  const [nickName, setNickName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { addressState, handleComplete } = useDaumPost();
  const [isDaumPostOpen, setIsDaumPostOpen] = useState(false);
  const handleDaumPostOpen = useCallback(() => setIsDaumPostOpen(prve => !prve), []);

  const [inputValue, setInputValue] = useState("");
  const [locates, setLocates] = useState<string[]>([]);

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

  return (
    <MemberInfoLayout>
      <MembeInfoParagraph>회원정보설정</MembeInfoParagraph>

      <AccountBox>
        <AccountSpan>*연결된 계정</AccountSpan>
        <RequiredItemSpan>*필수항목</RequiredItemSpan>
      </AccountBox>

      <KakaoBox>
        <img src={KakaoImg} />
        <KakaoEmailSpan>greenus@kakao.com</KakaoEmailSpan>
      </KakaoBox>

      <ProfileParagraph>프로필 사진</ProfileParagraph>

      <MembeInfoSection>
        <ProfileImageCol>
          <img src="" alt="" />

          <ProfileButtonBox>
            <ProfileEditButton>변경</ProfileEditButton>
            <ProfileDeleteButton>삭제</ProfileDeleteButton>
          </ProfileButtonBox>
        </ProfileImageCol>

        <NickNameCol>
          <NickNameParagraph>*닉네임</NickNameParagraph>
          <NickNameText>{errorMsg}</NickNameText>
          <NickNameInput onChange={handleNickName} />
        </NickNameCol>

        <DeliveryInfoCol>
          <DeliveryInfoParagraph>*배송지 정보</DeliveryInfoParagraph>

          <PostCodeBox>
            <PostCodeInput />
            <PostCodeButton onClick={handleDaumPostOpen}>우편번호 검색</PostCodeButton>
          </PostCodeBox>
          <AddressInfoInput />

          {isDaumPostOpen && <ZipCodeModal />}

          <AdressBox>
            <AddressDetailInfoInput />
            <DeliverySaveButton>배송지 저장</DeliverySaveButton>
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

      <MemberInfoEditButton>회원정보 수정</MemberInfoEditButton>
    </MemberInfoLayout>
  );
};

export default MemberInfo;
