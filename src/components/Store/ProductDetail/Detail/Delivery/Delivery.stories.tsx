import { ComponentStory, ComponentMeta } from "@storybook/react";
import Delivery from "./Delivery";

export default {
  title: "Store/ProductDetail/Detail/Delivery",
  component: Delivery,
} as ComponentMeta<typeof Delivery>;

const Template: ComponentStory<typeof Delivery> = args => <Delivery {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  data: {
    delivery: ["일반택배", "3000원 (50,000원 이상 무료배송)", "3000원", "배송불가 지역이 없습니다."],
    return: [
      "3000원 (최초 배송비가 무료인 경우 6000원 부과)",
      "6000원",
      "(12345) 서울 송파구 도로명주소 55길 33 1층 그리너스",
    ],
  },
};
