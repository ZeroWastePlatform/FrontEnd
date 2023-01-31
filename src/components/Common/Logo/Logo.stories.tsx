import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => <Logo />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
