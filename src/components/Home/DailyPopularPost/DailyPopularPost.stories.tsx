import { ComponentStory, ComponentMeta } from "@storybook/react";
import DailyPopularPost from "./DailyPopularPost";

export default {
  title: "Home/DailyPopularPost",
  component: DailyPopularPost,
} as ComponentMeta<typeof DailyPopularPost>;

const Template: ComponentStory<typeof DailyPopularPost> = args => <DailyPopularPost />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
