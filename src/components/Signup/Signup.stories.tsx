import { ComponentStory, ComponentMeta } from "@storybook/react";
import Signup from "./Signup";

export default {
  title: "Signup",
  component: Signup,
} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = args => <Signup />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
