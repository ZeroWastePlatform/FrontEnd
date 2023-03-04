import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategoryNavigation from "./CategoryNavigation";

export default {
  title: "MyPage/Common/CategoryNavigation",
  component: CategoryNavigation,
} as ComponentMeta<typeof CategoryNavigation>;

const Template: ComponentStory<typeof CategoryNavigation> = args => <CategoryNavigation {...args} />;

export const GeneralType = Template.bind({});
