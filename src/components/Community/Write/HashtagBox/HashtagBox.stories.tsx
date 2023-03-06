import { ComponentStory, ComponentMeta } from "@storybook/react";
import HashtagBox from "./HashtagBox";

export default {
  title: "Community/Write/HashtagBox",
  component: HashtagBox,
} as ComponentMeta<typeof HashtagBox>;

const Template: ComponentStory<typeof HashtagBox> = args => <HashtagBox {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
