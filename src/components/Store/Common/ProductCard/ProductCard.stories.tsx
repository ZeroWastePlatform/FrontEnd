import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCard from "./ProductCard";

export default {
  title: "Store/Common/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = args => (
  <div style={{ width: "270px", height: "430px;" }}>
    <ProductCard {...args} />
  </div>
);

export const GeneralType = Template.bind({});
GeneralType.args = {
  brand: "그리너스",
  title: "마일드 고체치약 30정입",
  discountRate: "45",
  price: "5900",
  badges: ["best", "sale"],
  liked: true,
};
