import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCard from "./ProductCard";

export default {
  title: "Store/ProductBuy/OrderProduct/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = args => <ProductCard {...args} />;

export const GeneralType = Template.bind({});
