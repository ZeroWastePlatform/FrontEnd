import { ComponentStory, ComponentMeta } from "@storybook/react";
import Write from "./Write";

export default {
  title: "Community/Write",
  component: Write,
} as ComponentMeta<typeof Write>;

const Template: ComponentStory<typeof Write> = args => <Write />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
