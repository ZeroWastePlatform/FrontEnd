import { ComponentStory, ComponentMeta } from "@storybook/react";
import FoldText from "./FoldText";

export default {
  title: "Store/ProductBuy/SlideBox/FoldText",
  component: FoldText,
} as ComponentMeta<typeof FoldText>;

const Template: ComponentStory<typeof FoldText> = () => <FoldText />;

export const GeneralType = Template.bind({});
