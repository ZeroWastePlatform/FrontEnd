import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoSharing from "./InfoSharing";

export default {
  title: "Community/CommunityList/InfoSharing",
  component: InfoSharing,
} as ComponentMeta<typeof InfoSharing>;

const Template: ComponentStory<typeof InfoSharing> = args => <InfoSharing />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
