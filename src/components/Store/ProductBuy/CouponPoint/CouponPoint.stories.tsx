import { ComponentStory, ComponentMeta } from "@storybook/react";
import CouponPoint from "./CouponPoint";

export default {
  title: "Store/ProductBuy/CouponPoint",
  component: CouponPoint,
} as ComponentMeta<typeof CouponPoint>;

const Template: ComponentStory<typeof CouponPoint> = () => <CouponPoint />;

export const GeneralType = Template.bind({});
