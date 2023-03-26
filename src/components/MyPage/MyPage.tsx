import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../atom/userInfo";
import CategoryNavigation from "./Common/CategoryNavigation/CategoryNavigation";
import ProfileAside from "./Common/ProfileAside/ProfileAside";
import { MyPageRow } from "./MyPage.style";
import MyPageCategoryNavData from "./MyPageCategoryNavData/MyPageCategoryNavData";

interface IMyPageProps {
  selectCategoryComponentList: {
    component: React.ReactElement;
    id: number;
    category: string;
  }[];
}

const MyPage = ({ selectCategoryComponentList }: IMyPageProps) => {
  const categoryNav = ["나의 주문", "관심상품", "커뮤니티", "회원정보설정"];
  const defaultSelect = categoryNav[0];
  const [selectCategoryNav, setSelectCategoryNav] = useState(defaultSelect);
  const [memberInfo, setMemberInfo] = useRecoilState(userInfoAtom);

  // const membersGetAPI = async (): Promise<void> => {
  //   const result = await axios.get("");
  //   // {
  //   //   headers: { Authorization: accessToken },
  //   // };
  //   // setLocalPopularGifticons(result.data.data.topShopByLocate);
  //   console.log(result);
  // };

  return (
    <>
      <CategoryNavigation
        categoryNav={categoryNav}
        selectCategoryNav={selectCategoryNav}
        setSelectCategoryNav={setSelectCategoryNav}
      />

      <MyPageRow>
        <ProfileAside />
        <MyPageCategoryNavData
          selectCategoryComponentList={selectCategoryComponentList}
          selectCategoryNav={selectCategoryNav}
        />
      </MyPageRow>
    </>
  );
};

export default MyPage;
