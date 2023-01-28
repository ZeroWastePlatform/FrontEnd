import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pagenation from "./Pagenation";

export default {
  title: "Common/Pagenation",
  component: Pagenation,
} as ComponentMeta<typeof Pagenation>;

const Template: ComponentStory<typeof Pagenation> = args => <Pagenation {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  pagelist: [1, 2, 3, 4, 5],
  movePage: action("이동"),
};
