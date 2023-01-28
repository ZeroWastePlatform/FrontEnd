import { ComponentStory, ComponentMeta } from "@storybook/react";
import Recommend from "./Recommend";

export default {
  title: "Store/ProductDetail/Detail/Recommend",
  component: Recommend,
} as ComponentMeta<typeof Recommend>;

const Template: ComponentStory<typeof Recommend> = () => <Recommend />;

export const GeneralType = Template.bind({});
