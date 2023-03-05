import { ComponentStory, ComponentMeta } from "@storybook/react";
import Reply from "./Reply";

export default {
  title: "Community/Article/CommentBox/Comment/Reply",
  component: Reply,
} as ComponentMeta<typeof Reply>;

const Template: ComponentStory<typeof Reply> = args => <Reply />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
