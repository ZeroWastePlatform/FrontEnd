import { ComponentStory, ComponentMeta } from "@storybook/react";
import Summary from "./Summary";

export default {
  title: "Store/ProductDetail/Summary/Summary",
  component: Summary,
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = args => <Summary {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  data: {
    thumnail: [
      "http://localhost:8000/images/test1.jpg",
      "http://localhost:8000/images/test2.jpg",
      "http://localhost:8000/images/test3.jpg",
    ],
    category: "욕실",
    brand: "동구밖",
    badges: ["NEW", "BEST", "SALE"],
    title: "올바른 린스바 쿨링용",
    price: 9500,
    options: [],
    summary: "3가지 식물성 오일로 모발 탄력에 도움을 주는 순식물성 린스바입니다. 상품설명 텍스트가 들어갑니다",
    liked: "100",
  },
};
