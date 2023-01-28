import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategoryNavigation from "./CategoryNavigation";

export default {
  title: "Store/ProductDetail/Detail/Ask/CategoryNavigation",
  component: CategoryNavigation,
} as ComponentMeta<typeof CategoryNavigation>;

const Template: ComponentStory<typeof CategoryNavigation> = args => <CategoryNavigation {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  sort: "전체(156)",
  setSort: action("정렬변경"),
  counts: [156, 106, 10, 30, 10],
};
