import { ComponentStory, ComponentMeta } from "@storybook/react";
import GreenCampaign from "./GreenCampaign";

export default {
  title: "Home/GreenCampaign",
  component: GreenCampaign,
} as ComponentMeta<typeof GreenCampaign>;

const Template: ComponentStory<typeof GreenCampaign> = args => <GreenCampaign />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
