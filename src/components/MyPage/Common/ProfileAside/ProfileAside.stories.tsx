import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProfileAside from "./ProfileAside";

export default {
  title: "MyPage/Common/ProfileAside",
  component: ProfileAside,
} as ComponentMeta<typeof ProfileAside>;

const Template: ComponentStory<typeof ProfileAside> = args => <ProfileAside />;

export const GeneralType = Template.bind({});
