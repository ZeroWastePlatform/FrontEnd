import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "./Search";

export default {
  title: "Common/Header/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
