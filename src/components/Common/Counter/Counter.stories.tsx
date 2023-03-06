import { ComponentStory, ComponentMeta } from "@storybook/react";
import Counter from "./Counter";

export default {
  title: "Common/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = args => <Counter {...args} />;

export const GeneralType = Template.bind({});
