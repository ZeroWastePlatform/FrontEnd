import { ComponentStory, ComponentMeta } from "@storybook/react";
import SubTitle from "./SubTitle";

export default {
  title: "Store/ProductBuy/Common/SubTitle",
  component: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = args => <SubTitle {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  children: "주문자 정보",
};
