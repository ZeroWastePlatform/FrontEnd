import { ComponentStory, ComponentMeta } from "@storybook/react";
import OrderInfo from "./OrderInfo";

export default {
  title: "Store/ProductBuy/OrderInfo",
  component: OrderInfo,
} as ComponentMeta<typeof OrderInfo>;

const Template: ComponentStory<typeof OrderInfo> = () => <OrderInfo />;

export const GeneralType = Template.bind({});
