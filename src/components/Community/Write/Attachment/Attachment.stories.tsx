import { ComponentStory, ComponentMeta } from "@storybook/react";
import Attachment from "./Attachment";

export default {
  title: "Community/Write/Attachment",
  component: Attachment,
} as ComponentMeta<typeof Attachment>;

const Template: ComponentStory<typeof Attachment> = args => <Attachment {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
