import {
  ProfileAsideLayout,
  PropfileNickNameSpan,
  PropfileLevelSpan,
  MemberInfoButton,
  MemberDataRow,
  LikeBox,
  LikeText,
  LikeInfoText,
  PointBox,
  PointText,
  PointInfoText,
  CouponText,
  CouponInfoText,
  CouponBox,
  ProfileBox,
} from "./ProfileAside.style";
import ProfileImg from "../../../../assets/images/profile.png";
import LikeImg from "../../../../assets/images/heart.svg";
import pointImg from "../../../../assets/images/point.svg";
import couponImg from "../../../../assets/images/coupon.svg";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../atom/userInfo";
import { useEffect } from "react";
import customAPI from "../../../../lib/customAPI";

const ProfileAside = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);

  const accessToken = localStorage.getItem("accessToken");

  const memberInfoAPI = async (): Promise<void> => {
    const result = await customAPI.get("api/members/me?page=1", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(result);
  };

  useEffect(() => {
    memberInfoAPI();
  }, []);

  return (
    <ProfileAsideLayout>
      <img src={ProfileImg} />
      <ProfileBox>
        <PropfileNickNameSpan>{userInfo.nickname}</PropfileNickNameSpan>
        <PropfileLevelSpan>LV. {userInfo.level} 프로 그리너스</PropfileLevelSpan>
        <MemberInfoButton
          onClick={() => {
            navigate("?category=회원정보설정");
          }}
        >
          회원정보 설정
        </MemberInfoButton>
      </ProfileBox>

      <MemberDataRow>
        <LikeBox>
          <img src={LikeImg} />
          <LikeText>찜목록</LikeText>
          <LikeInfoText>{userInfo.zzimCnt}</LikeInfoText>
        </LikeBox>

        <PointBox>
          <img src={pointImg} />
          <PointText>포인트</PointText>
          <PointInfoText>{userInfo.point}</PointInfoText>
        </PointBox>

        <CouponBox>
          <img src={couponImg} />
          <CouponText>내 쿠폰</CouponText>
          <CouponInfoText>{userInfo.couponCnt}</CouponInfoText>
        </CouponBox>
      </MemberDataRow>
    </ProfileAsideLayout>
  );
};

export default ProfileAside;
