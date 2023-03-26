import styled from "styled-components";

export const MemberInfoLayout = styled.section``;

export const MembeInfoParagraph = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #252525;
  margin-bottom: 50px;
`;

export const AccountBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const AccountSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #252525;
`;

export const RequiredItemSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #7a7b7d;
`;

export const KakaoBox = styled.div`
  margin-bottom: 50px;
  display: flex;
  gap: 15px;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const KakaoEmailSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #919193;
`;

export const ProfileParagraph = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #252525;
  margin-bottom: 20px;
`;

export const MembeInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 650px;
`;

export const ProfileImageCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProfileEditButton = styled.button`
  width: 74px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #a7a7a8;
  border-radius: 8px;
`;

export const ProfileDeleteButton = styled(ProfileEditButton)``;

export const PasswordCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordParagraph = styled(ProfileParagraph)`
  margin-bottom: 10px;
`;

export const PasswordText = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #7a7b7d;
  margin-bottom: 4px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 16px;
  border: 1px solid #a7a7a8;
  border-radius: 8px;
  margin-top: 4px;
  ::placeholder {
    font-family: "Pretendard";
    font-size: 16px;
    line-height: 24px;
    color: #7a7b7d;
  }
`;

export const NickNameCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NickNameParagraph = styled(PasswordParagraph)``;

export const NickNameText = styled(PasswordText)``;

export const NickNameInput = styled(PasswordInput)`
  ::placeholder {
    color: #252525;
  }
`;

export const DeliveryInfoCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryInfoParagraph = styled(NickNameParagraph)``;

export const PostCodeBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const PostCodeInput = styled.input`
  width: 120px;
  height: 48px;
  border: 1px solid #a7a7a8;
  border-radius: 8px;
  padding: 8px;
`;

export const PostCodeButton = styled.button`
  width: 120px;
  height: 50px;
  background: #f1f4f5;
  border-radius: 3px;
  border: 0;
`;

export const AddressInfoInput = styled.input`
  width: 428px;
  height: 48px;
  border: 1px solid #a7a7a8;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const AdressBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const AddressDetailInfoInput = styled(AddressInfoInput)`
  margin: 0;
`;

export const LocateInfoInput = styled(AddressInfoInput)`
  padding: 0 12px;
`;

export const DeliverySaveButton = styled.button`
  width: 120px;
  height: 50px;
  background: #646667;
  border-radius: 3px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: 0;
`;

export const LocateSettingCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocateInfoRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LocateRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 428px;
  gap: 10px;
  margin-bottom: 32px;
`;

export const LocateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 208.35px;
  height: 50px;
  background: #66f095;
  border-radius: 10px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #f1f4f5;
`;

export const LocateDeleteButton = styled.button`
  color: #f1f4f5;
`;

export const LocateSettingParagraph = styled(DeliveryInfoParagraph)`
  margin-bottom: 16px;
`;

export const LocateAddButton = styled.button`
  display: flex;
  justify-content: space-between;
  border: 0;
  width: 97px;
  height: 50px;
  background: #d3d3d4;
  border-radius: 10px;
  align-items: center;
  padding: 0 20px;
`;

export const AddText = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #f1f4f5;
`;

export const Add = styled(AddText)``;

export const CurrentLocationButton = styled.button`
  width: 417px;
  height: 50px;
  background: #646667;
  border-radius: 3px;
  border: 0;
  margin-bottom: 150px;
  margin-top: 15px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #f1f4f5;
`;

export const MemberInfoEditButton = styled.button`
  width: 650px;
  height: 64px;
  background: #66f095;
  border-radius: 10px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border: 0;
  margin-bottom: 100px;
`;
