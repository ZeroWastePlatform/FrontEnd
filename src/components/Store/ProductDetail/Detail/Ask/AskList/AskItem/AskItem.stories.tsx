import { ComponentStory, ComponentMeta } from "@storybook/react";
import AskItem from "./AskItem";

export default {
  title: "Store/ProductDetail/Detail/Ask/AskList/AskItem",
  component: AskItem,
} as ComponentMeta<typeof AskItem>;

const Template: ComponentStory<typeof AskItem> = args => <AskItem {...args} />;

export const OpenType = Template.bind({});
OpenType.args = {
  data: {
    id: 4,
    title: "이번달에 살 수 있나요?",
    category: "기타",
    nickname: "grenus",
    date: "2023.01.03",
    content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ 빨리 입고해주세요",
    answer:
      "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
    secret: false,
  },
};

export const SecretType = Template.bind({});
SecretType.args = {
  data: {
    id: 4,
    title: "이번달에 살 수 있나요?",
    category: "기타",
    nickname: "grenus",
    date: "2023.01.03",
    content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ 빨리 입고해주세요",
    answer:
      "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
    secret: true,
  },
};
