import { ComponentStory, ComponentMeta } from "@storybook/react";
import Community from "./Community";

export default {
  title: "MyPage/Community/Community",
  component: Community,
} as ComponentMeta<typeof Community>;

const Template: ComponentStory<typeof Community> = args => <Community />;

export const GeneralType = Template.bind({});
