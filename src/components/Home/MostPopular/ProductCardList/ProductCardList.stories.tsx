import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCardList from "./ProductCardList";

export default {
  title: "Home/MostPopular/ProductCardList",
  component: ProductCardList,
} as ComponentMeta<typeof ProductCardList>;

const Template: ComponentStory<typeof ProductCardList> = args => <ProductCardList />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
