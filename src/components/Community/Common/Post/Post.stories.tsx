import { ComponentStory, ComponentMeta } from "@storybook/react";
import Post from "./Post";

export default {
  title: "Community/Common/Post",
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = args => <Post />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
