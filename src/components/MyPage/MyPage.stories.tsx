import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyPage from "./MyPage";
import CommunityContainer from "./Community/CommunityContainer";
import ContentListContainer from "./ContentList/ContentListContainer";
import MemberInfoContainer from "./MemberInfo/MemberInfoContainer";
import MyOrderListContainer from "./MyOrderList/MyOrderListContainer";
import ProductInterestContainer from "./ProductInterest/ProductInterestContainer";

export default {
  title: "MyPage/MyPage",
  component: MyPage,
} as ComponentMeta<typeof MyPage>;

const Template: ComponentStory<typeof MyPage> = args => <MyPage {...args} />;

export const GeneralType = Template.bind({});

GeneralType.args = {
  selectCategoryComponentList: [
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
      component: <ContentListContainer />,
      category: "컨텐츠",
      id: 3,
    },
    {
      component: <MemberInfoContainer />,
      category: "회원정보설정",
      id: 4,
    },
  ],
};
