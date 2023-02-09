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
import LikeImg from "../../../../assets/images/heart.png";
import pointImg from "../../../../assets/images/point.png";
import couponImg from "../../../../assets/images/coupon.png";
import { useNavigate } from "react-router";

const ProfileAside = () => {
  const navigate = useNavigate();

  return (
    <ProfileAsideLayout>
      <img src={ProfileImg} />
      <ProfileBox>
        <PropfileNickNameSpan>그리너스조아</PropfileNickNameSpan>
        <PropfileLevelSpan>LV. 5 프로 그리너스</PropfileLevelSpan>
        <MemberInfoButton
          onClick={() => {
            navigate("mypage?category=회원정보설정");
          }}
        >
          회원정보 설정
        </MemberInfoButton>
      </ProfileBox>

      <MemberDataRow>
        <LikeBox>
          <img src={LikeImg} />
          <LikeText>찜목록</LikeText>
          <LikeInfoText>13</LikeInfoText>
        </LikeBox>

        <PointBox>
          <img src={pointImg} />
          <PointText>포인트</PointText>
          <PointInfoText>10,000</PointInfoText>
        </PointBox>

        <CouponBox>
          <img src={couponImg} />
          <CouponText>내 쿠폰</CouponText>
          <CouponInfoText>0</CouponInfoText>
        </CouponBox>
      </MemberDataRow>
    </ProfileAsideLayout>
  );
};

export default ProfileAside;
