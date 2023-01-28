import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductSort from "./ProductSort";

export default {
  title: "Store/ProductList/ProductCardList/ProductSort",
  component: ProductSort,
} as ComponentMeta<typeof ProductSort>;

const Template: ComponentStory<typeof ProductSort> = args => <ProductSort {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  condition: { category: "전체", filter: [], sort: "인기순", page: 1 },
  setCondition: action("정렬방식 변경"),
};
