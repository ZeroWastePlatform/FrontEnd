import { ComponentStory, ComponentMeta } from "@storybook/react";
import ShipInfo from "./ShipInfo";

export default {
  title: "Store/ProductBuy/ShipInfo",
  component: ShipInfo,
} as ComponentMeta<typeof ShipInfo>;

const Template: ComponentStory<typeof ShipInfo> = () => <ShipInfo />;

export const GeneralType = Template.bind({});
