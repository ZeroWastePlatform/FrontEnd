import { ComponentStory, ComponentMeta } from "@storybook/react";
import MemberInfo from "./MemberInfo";

export default {
  title: "MyPage/MemberInfo/MemberInfo",
  component: MemberInfo,
} as ComponentMeta<typeof MemberInfo>;

const Template: ComponentStory<typeof MemberInfo> = args => <MemberInfo />;

export const GeneralType = Template.bind({});
