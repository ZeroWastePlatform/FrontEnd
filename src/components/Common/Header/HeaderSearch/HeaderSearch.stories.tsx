import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderSearch from "./HeaderSearch";

export default {
  title: "Common/Header/HeaderSearch",
  component: HeaderSearch,
} as ComponentMeta<typeof HeaderSearch>;

const Template: ComponentStory<typeof HeaderSearch> = args => <HeaderSearch />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
