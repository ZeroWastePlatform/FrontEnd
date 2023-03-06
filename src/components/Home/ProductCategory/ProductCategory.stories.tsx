import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getCategoryList } from "../../../utils/getCategoryList";
import ProductCategory from "./ProductCategory";

export default {
  title: "Home/ProductCategory",
  component: ProductCategory,
} as ComponentMeta<typeof ProductCategory>;

const Template: ComponentStory<typeof ProductCategory> = args => <ProductCategory {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  categoryList: getCategoryList(),
};
