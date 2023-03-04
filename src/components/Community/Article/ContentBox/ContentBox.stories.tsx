import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentBox from "./ContentBox";

export default {
  title: "Community/Article/ContentBox",
  component: ContentBox,
} as ComponentMeta<typeof ContentBox>;

const Template: ComponentStory<typeof ContentBox> = args => <ContentBox />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
