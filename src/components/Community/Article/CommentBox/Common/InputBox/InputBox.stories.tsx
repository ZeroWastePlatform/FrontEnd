import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBox from "./InputBox";

export default {
  title: "Community/Article/CommentBox/Common/InputBox",
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = args => <InputBox {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  placeholder: "댓글을 남겨 보세요.",
};
