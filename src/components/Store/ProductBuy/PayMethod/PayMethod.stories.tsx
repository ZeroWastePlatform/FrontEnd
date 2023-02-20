import { ComponentStory, ComponentMeta } from "@storybook/react";
import PayMethod from "./PayMethod";

export default {
  title: "Store/ProductBuy/PayMethod",
  component: PayMethod,
} as ComponentMeta<typeof PayMethod>;

const Template: ComponentStory<typeof PayMethod> = () => <PayMethod />;

export const GeneralType = Template.bind({});
