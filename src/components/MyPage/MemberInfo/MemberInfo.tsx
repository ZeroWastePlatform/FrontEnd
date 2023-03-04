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
  PasswordCol,
  PasswordInput,
  PasswordParagraph,
  PasswordText,
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

const MemberInfo = () => {
  return (
    <MemberInfoLayout>
      <MembeInfoParagraph>회원정보설정</MembeInfoParagraph>

      <AccountBox>
        <AccountSpan>*연결된 계정</AccountSpan>
        <RequiredItemSpan>*필수항목</RequiredItemSpan>
      </AccountBox>

      <KakaoBox>
        <img src="" alt="" />
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

        <PasswordCol>
          <PasswordParagraph>*비밀번호</PasswordParagraph>
          <PasswordText>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</PasswordText>
          <PasswordInput type="password" />
        </PasswordCol>

        <NickNameCol>
          <NickNameParagraph>*닉네임</NickNameParagraph>
          <NickNameText>닉네임에 특수문자 사용은 불가합니다.</NickNameText>
          <NickNameInput />
        </NickNameCol>

        <DeliveryInfoCol>
          <DeliveryInfoParagraph>*배송지 정보</DeliveryInfoParagraph>

          <PostCodeBox>
            <PostCodeInput />
            <PostCodeButton>우편번호 검색</PostCodeButton>
          </PostCodeBox>
          <AddressInfoInput />

          <AdressBox>
            <AddressDetailInfoInput />
            <DeliverySaveButton>배송지 저장</DeliverySaveButton>
          </AdressBox>
        </DeliveryInfoCol>

        <LocateSettingCol>
          <LocateSettingParagraph>지역 설정</LocateSettingParagraph>

          <LocateAddButton>
            <AddText>추가</AddText>
            <Add>+</Add>
          </LocateAddButton>

          <CurrentLocationButton>현재 위치로 찾기</CurrentLocationButton>
        </LocateSettingCol>
      </MembeInfoSection>

      <MemberInfoEditButton>회원정보 수정</MemberInfoEditButton>
    </MemberInfoLayout>
  );
};

export default MemberInfo;
