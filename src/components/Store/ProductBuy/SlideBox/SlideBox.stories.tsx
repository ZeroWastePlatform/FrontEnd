import { ComponentStory, ComponentMeta } from "@storybook/react";
import SlideBox from "./SlideBox";

export default {
  title: "Store/ProductBuy/SlideBox",
  component: SlideBox,
} as ComponentMeta<typeof SlideBox>;

const Template: ComponentStory<typeof SlideBox> = () => <SlideBox />;

export const GeneralType = Template.bind({});
