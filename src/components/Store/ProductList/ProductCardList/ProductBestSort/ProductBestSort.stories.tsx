import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductBestSort from "./ProductBestSort";

export default {
  title: "Store/ProductList/ProductCardList/ProductBestSort",
  component: ProductBestSort,
} as ComponentMeta<typeof ProductBestSort>;

const Template: ComponentStory<typeof ProductBestSort> = args => <ProductBestSort {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  condition: { category: "베스트", filter: [], sort: "식품", page: 1 },
  setCondition: action("정렬방식 변경"),
};
