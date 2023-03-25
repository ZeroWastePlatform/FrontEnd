import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategoryNavigation from "./CategoryNavigation";

export default {
  title: "Store/Common/CategoryNavigation",
  component: CategoryNavigation,
} as ComponentMeta<typeof CategoryNavigation>;

const Template: ComponentStory<typeof CategoryNavigation> = args => <CategoryNavigation {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  condition: { category: "ALL", sort: "POPULARITY", page: 1, brand: null, price: null, productStatus: null },
  setCondition: action("카테고리 변경"),
};
