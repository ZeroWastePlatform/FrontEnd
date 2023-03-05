import { ComponentStory, ComponentMeta } from "@storybook/react";
import Comment from "./Comment";

export default {
  title: "Community/Article/CommentBox/Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = args => <Comment />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
