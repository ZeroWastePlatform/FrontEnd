import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Agree from "./Agree";

export default {
  title: "Signup/Agree",
  component: Agree,
} as ComponentMeta<typeof Agree>;

const Template: ComponentStory<typeof Agree> = args => <Agree {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  agreeList: [
    {
      id: 1,
      text: "만 14세 이상입니다.",
      description: "(필수)",
    },
    {
      id: 2,
      text: "이용약관 동의",
      description: "(필수)",
    },
    {
      id: 3,
      text: "개인정보수집 및 이용동의",
      description: "(필수)",
    },
    {
      id: 4,
      text: "개인정보 마케팅 활용동의",
      description: "(선택)",
    },
  ],
  checkedList: [],
  handleChangeAll: action("전체선택"),
  handleChangeElement: action("개별선택"),
};
