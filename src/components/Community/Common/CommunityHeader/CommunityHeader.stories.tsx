import { ComponentStory, ComponentMeta } from "@storybook/react";
import CommunityHeader from "./CommunityHeader";

export default {
  title: "Community/Common/CommunityHeader",
  component: CommunityHeader,
} as ComponentMeta<typeof CommunityHeader>;

const Template: ComponentStory<typeof CommunityHeader> = args => <CommunityHeader {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  title: "자유게시판",
  categoryList: ["해쉬태그", "키워드", "입니다."],
};
