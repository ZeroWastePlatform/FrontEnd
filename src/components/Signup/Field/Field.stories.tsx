import { ComponentStory, ComponentMeta } from "@storybook/react";
import Field from "./Field";

export default {
  title: "Signup/Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = args => <Field {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  title: "핸드폰 번호",
  description: "본인 명의의 핸드폰 번호를 입력해주세요.",
  placeholder: "숫자만 입력",
  isCertification: true,
};
