import { ComponentStory, ComponentMeta } from "@storybook/react";
import Aside from "./Aside";

export default {
  title: "Community/Article/Aside",
  component: Aside,
} as ComponentMeta<typeof Aside>;

const Template: ComponentStory<typeof Aside> = args => <Aside />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
