import { ComponentStory, ComponentMeta } from "@storybook/react";
import FreeBoard from "./FreeBoard";

export default {
  title: "Community/CommunityList/FreeBoard",
  component: FreeBoard,
} as ComponentMeta<typeof FreeBoard>;

const Template: ComponentStory<typeof FreeBoard> = args => <FreeBoard />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
