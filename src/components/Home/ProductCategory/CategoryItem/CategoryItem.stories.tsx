import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getCategoryList } from "../../../../utils/getCategoryList";
import CategoryItem from "./CategoryItem";

export default {
  title: "Home/ProductCategory/CategoryItem",
  component: CategoryItem,
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = args => <CategoryItem {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  category: getCategoryList()[0],
};
