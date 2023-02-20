import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBox from "./InputBox";

export default {
  title: "Store/ProductBuy/Common/InputBox",
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = args => <InputBox {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  title: "이름",
};
