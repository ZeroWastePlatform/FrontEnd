import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentList from "./ContentList";

export default {
  title: "MyPage/ContentList/ContentList",
  component: ContentList,
} as ComponentMeta<typeof ContentList>;

const Template: ComponentStory<typeof ContentList> = args => <ContentList />;

export const GeneralType = Template.bind({});
