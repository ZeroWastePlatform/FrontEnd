import { ComponentStory, ComponentMeta } from "@storybook/react";
import CommentBox from "./CommentBox";

export default {
  title: "Community/Article/CommentBox",
  component: CommentBox,
} as ComponentMeta<typeof CommentBox>;

const Template: ComponentStory<typeof CommentBox> = args => <CommentBox />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
