import { ComponentStory, ComponentMeta } from "@storybook/react";
import BuyButton from "./BuyButton";

export default {
  title: "Store/ProductBuy/SlideBox/BuyButton",
  component: BuyButton,
} as ComponentMeta<typeof BuyButton>;

const Template: ComponentStory<typeof BuyButton> = args => <BuyButton {...args} />;

export const GeneralType = Template.bind({});
