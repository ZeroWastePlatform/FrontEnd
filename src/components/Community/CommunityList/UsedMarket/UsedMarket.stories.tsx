import { ComponentStory, ComponentMeta } from "@storybook/react";
import UsedMarket from "./UsedMarket";

export default {
  title: "Community/CommunityList/UsedMarket",
  component: UsedMarket,
} as ComponentMeta<typeof UsedMarket>;

const Template: ComponentStory<typeof UsedMarket> = args => <UsedMarket />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
