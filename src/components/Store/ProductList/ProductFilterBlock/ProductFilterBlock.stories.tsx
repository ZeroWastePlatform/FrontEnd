import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductFilterBlock from "./ProductFilterBlock";
import { action } from "@storybook/addon-actions";

export default {
  title: "Store/ProductList/ProductFilterBlock",
  component: ProductFilterBlock,
} as ComponentMeta<typeof ProductFilterBlock>;

const Template: ComponentStory<typeof ProductFilterBlock> = args => <ProductFilterBlock {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  isSelected: () => false,
  setFilter: action("필터 선택"),
};
