import MyPage from "./MyPage";
import CommunityContainer from "./Community/CommunityContainer";
import ContentListContainer from "./ContentList/ContentListContainer";
import MemberInfoContainer from "./MemberInfo/MemberInfoContainer";
import MyOrderListContainer from "./MyOrderList/MyOrderListContainer";
import ProductInterestContainer from "./ProductInterest/ProductInterestContainer";

const selectCategoryComponentList = [
  {
    component: <MyOrderListContainer />,
    category: "나의 주문",
    id: 0,
  },
  {
    component: <ProductInterestContainer />,
    category: "관심상품",
    id: 1,
  },
  {
    component: <CommunityContainer />,
    category: "커뮤니티",
    id: 2,
  },
  {
    component: <MemberInfoContainer />,
    category: "회원정보설정",
    id: 3,
  },
];

const MyPageContainer = () => {
  return <MyPage selectCategoryComponentList={selectCategoryComponentList} />;
};

export default MyPageContainer;
