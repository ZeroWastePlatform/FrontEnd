import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Ask from "./Ask";

export default {
  title: "Store/ProductDetail/Detail/Ask",
  component: Ask,
} as ComponentMeta<typeof Ask>;

const Template: ComponentStory<typeof Ask> = args => <Ask {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  page: 1,
  setPage: action("페이지이동"),
  sort: "베스트순",
  setSort: action("정렬변경"),
  data: {
    totalElement: 456,
    categoryElement: [156, 106, 10, 30, 10],
    content: [
      {
        id: 1,
        title: "이번달에 살 수 있나요?",
        category: "제품문의",
        nickname: "grenus",
        date: "2023.01.03",
        content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ 빨리 입고해주세요",
        answer:
          "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
        secret: true,
      },
      {
        id: 2,
        title: "이번달에 살 수 있나요?",
        category: "재입고문의",
        nickname: "grenus",
        date: "2023.01.03",
        content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ 빨리 입고해주세요",
        answer:
          "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
        secret: false,
      },
      {
        id: 3,
        title: "이번달에 살 수 있나요?",
        category: "배송문의",
        nickname: "grenus",
        date: "2023.01.03",
        content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ 빨리 입고해주세요",
        answer:
          "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
        secret: false,
      },
      {
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
    ],
  },
};
