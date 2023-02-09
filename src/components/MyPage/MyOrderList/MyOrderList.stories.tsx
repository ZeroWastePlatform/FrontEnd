import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyOrderList from "./MyOrderList";

export default {
  title: "MyPage/MyOrderList/MyOrderList",
  component: MyOrderList,
} as ComponentMeta<typeof MyOrderList>;

const Template: ComponentStory<typeof MyOrderList> = args => <MyOrderList {...args} />;

export const GeneralType = Template.bind({});

GeneralType.args = {
  selectList: [
    {
      id: 1,
      period: "기간",
    },
    {
      id: 2,
      period: "1주 ",
    },
    {
      id: 3,
      period: "2주 ",
    },
  ],
};
