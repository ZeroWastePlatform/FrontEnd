import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductInterest from "./ProductInterest";

export default {
  title: "MyPage/ProductInterest/ProductInterest",
  component: ProductInterest,
} as ComponentMeta<typeof ProductInterest>;

const Template: ComponentStory<typeof ProductInterest> = args => <ProductInterest />;

export const GeneralType = Template.bind({});
