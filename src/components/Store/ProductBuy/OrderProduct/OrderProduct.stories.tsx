import { ComponentStory, ComponentMeta } from "@storybook/react";
import OrderProduct from "./OrderProduct";

export default {
  title: "Store/ProductBuy/OrderProduct",
  component: OrderProduct,
} as ComponentMeta<typeof OrderProduct>;

const Template: ComponentStory<typeof OrderProduct> = () => <OrderProduct />;

export const GeneralType = Template.bind({});
