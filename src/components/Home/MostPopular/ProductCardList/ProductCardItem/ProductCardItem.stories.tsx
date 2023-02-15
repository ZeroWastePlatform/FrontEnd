import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCardItem from "./ProductCardItem";

export default {
  title: "Home/MostPopular/ProductCardList/ProductCardItem",
  component: ProductCardItem,
} as ComponentMeta<typeof ProductCardItem>;

const Template: ComponentStory<typeof ProductCardItem> = args => <ProductCardItem />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
