import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomSelect from "./CustomSelect";

export default {
  title: "Common/CustomSelect",
  component: CustomSelect,
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = args => <CustomSelect {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  options: ["자유게시판", "중고거래", "정보공유"],
  selectValue: "자유게시판",
  isShowOption: true,
};
