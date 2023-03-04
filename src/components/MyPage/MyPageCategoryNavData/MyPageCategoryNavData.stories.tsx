import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyPageCategoryNavData from "./MyPageCategoryNavData";

export default {
  title: "MyPage/MyPageCategoryNavData/MyPageCategoryNavData",
  component: MyPageCategoryNavData,
} as ComponentMeta<typeof MyPageCategoryNavData>;

const Template: ComponentStory<typeof MyPageCategoryNavData> = args => <MyPageCategoryNavData {...args} />;

export const GeneralType = Template.bind({});
