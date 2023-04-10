import styled from "styled-components";

export const ProfileAsideLayout = styled.div`
  min-width: 340px;
  border: 2px solid #919193;
  border-radius: 30px;
  height: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 250px;
    height: 250px;
    margin: 40px 0 20px 0;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PropfileNickNameSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;

export const PropfileLevelSpan = styled.span`
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 24px;
  color: #7a7b7d;
  margin: 10px 0 20px 0;
`;

export const MemberInfoButton = styled.button`
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 24px;
  color: #646667;
  border: 1px solid #919193;
  background-color: white;
  margin-bottom: 40px;
  border-radius: 10px;
  width: 149px;
  height: 44px;
`;

export const MemberDataRow = styled.div`
  border-top: 1px solid #a7a7a8;
  display: flex;
  gap: 40px;
  img {
    width: 30px;
    height: 30px;
    margin: 40px 0 0 0;
  }
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const PointBox = styled(LikeBox)``;
export const CouponBox = styled(LikeBox)``;

export const LikeText = styled.span`
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 24px;
  color: #252525;
`;

export const PointText = styled(LikeText)``;

export const CouponText = styled(LikeText)``;

export const LikeInfoText = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #646667;
`;

export const PointInfoText = styled(LikeInfoText)``;

export const CouponInfoText = styled(LikeInfoText)``;
