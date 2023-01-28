import { ComponentStory, ComponentMeta } from "@storybook/react";
import Buy from "./Buy";

export default {
  title: "Store/ProductDetail/Summary/Buy",
  component: Buy,
} as ComponentMeta<typeof Buy>;

const Template: ComponentStory<typeof Buy> = args => <Buy {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  badges: ["NEW", "BEST", "SALE"],
  title: "[동구밖] 올바른린스파",
  price: "9500",
  summary: "3가지 식물성 오일로 모발 탄력에 도움을 주는 순식물성 린스바입니다. 상품설명 텍스트가 들어갑니다",
  liked: "100",
};
