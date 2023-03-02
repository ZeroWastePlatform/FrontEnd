import { ComponentStory, ComponentMeta } from "@storybook/react";
import BuyInfoBox from "./BuyInfoBox";

export default {
  title: "Store/ProductBuy/SlideBox/BuyInfoBox",
  component: BuyInfoBox,
} as ComponentMeta<typeof BuyInfoBox>;

const Template: ComponentStory<typeof BuyInfoBox> = () => <BuyInfoBox />;

export const GeneralType = Template.bind({});
