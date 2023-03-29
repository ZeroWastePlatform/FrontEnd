export interface ask {
  totalElement: number;
  categoryElement: number[];
  totalPage: number;
  content: content[];
}

interface content {
  id: number;
  title: string;
  category: string;
  nickname: string;
  date: string;
  content: string;
  answer: string;
  answered: boolean;
  secret: boolean;
}

const ask = {
  totalElement: 15,
  categoryElement: [15, 3, 2, 5, 5],
  totalPage: 3,
  content: [
    {
      id: 1,
      title: "제품 용량 문의 드립니다",
      category: "제품문의",
      nickname: "us",
      date: "2023.03.11",
      content: "각 종류별로 용량은 차이가 없나요?",
      answer: "",
      answered: false,
      secret: true,
    },
    {
      id: 2,
      title: "이번달에 살 수 있나요?",
      category: "기타",
      nickname: "gr",
      date: "2023.01.04",
      content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ\n빨리 입고해주세요",
      answer:
        "안녕하세요 동구밭 입니다 =]\n문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나,\n현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ\n빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: false,
    },
    {
      id: 3,
      title: "이번달에 살 수 있나요?",
      category: "배송문의",
      nickname: "kh",
      date: "2023.01.03",
      content: "제품 카테고리 문의",
      answer:
        "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: true,
    },
    {
      id: 4,
      title: "4일 출고 예정으로 되어 있었는데 18일 이후 출고 되는건가요?",
      category: "기타",
      nickname: "ks",
      date: "2022.12.03",
      content: "출고 날짜가 계속 변동되는데 정확한 날짜를 알려주세요",
      answer:
        "안녕하세요 출고 날짜는 현재 18일 이후로 예상됩니다 불편을 드린점 양해 부탁드립니다. 구매 취소를 원하시면 구매하신 페이지에서 취소처리 하실수 있습니다. 감사합니다.",
      answered: true,
      secret: false,
    },
    {
      id: 5,
      title: "이번달에 살 수 있나요?",
      category: "기타",
      nickname: "ee",
      date: "2022.12.01",
      content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ\n 빨리 입고해주세요",
      answer:
        "안녕하세요 동구밭 입니다 =]\n 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나,\n 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ\n빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: true,
    },
    {
      id: 6,
      title: "이번달에 살 수 있나요?",
      category: "기타",
      nickname: "aad",
      date: "2022.11.28",
      content: "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ\n빨리 입고해주세요",
      answer:
        "안녕하세요 동구밭 입니다 =]\n문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나,\n현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ\n빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: false,
    },
    {
      id: 7,
      title: "이번달에 살 수 있나요?",
      category: "배송문의",
      nickname: "xc",
      date: "2022.11.04",
      content: "제품 카테고리 문의",
      answer:
        "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: true,
    },
    {
      id: 8,
      title: "배송이 너무 느립니다",
      category: "배송문의",
      nickname: "kh",
      date: "2022.10.14",
      content: "제품 카테고리 문의",
      answer: "",
      answered: false,
      secret: true,
    },
    {
      id: 9,
      title: "이번달에 살 수 있나요?",
      category: "배송문의",
      nickname: "kh",
      date: "2022.09.03",
      content: "제품 용량 문의",
      answer: "",
      answered: false,
      secret: true,
    },
    {
      id: 10,
      title: "350ml 사이즈 언제 재입고 되나요?",
      category: "재입고문의",
      nickname: "xc",
      date: "2022.08.03",
      content: "제품 용량 문의",
      answer: "안녕하세요 1주일 이내로 재입고될 예정입니다. 재입고되면 알림메시지가 전송되므로 확인 부탁드립니다.",
      answered: true,
      secret: true,
    },
    {
      id: 11,
      title: "xl사이즈 재입고 문의",
      category: "재입고문의",
      nickname: "xc",
      date: "2022.07.02",
      content: "제품 용량 문의",
      answer: "안녕하세요 1주일 이내로 재입고될 예정입니다. 재입고되면 알림메시지가 전송되므로 확인 부탁드립니다.",
      answered: true,
      secret: true,
    },
    {
      id: 12,
      title: "욕실에서 사용가능한 제품인가요?",
      category: "제품문의",
      nickname: "xc",
      date: "2022.06.02",
      content: "제품 용량 문의",
      answer: "안녕하세요 해당 제품은 욕실에서 사용이 가능한 제품입니다. 감사합니다.",
      answered: true,
      secret: true,
    },
    {
      id: 13,
      title: "가격이 변동된거같아요",
      category: "기타",
      nickname: "xc",
      date: "2022.05.02",
      content: "가격이 일주일전과 변동이 있는것 같습니다.",
      answer: "",
      answered: false,
      secret: false,
    },
    {
      id: 14,
      title: "다음주 수요일안에 받을수 있나요?",
      category: "배송문의",
      nickname: "xc",
      date: "2022.04.02",
      content: "제목과 같이 배송가능 날짜가 궁금합니다.",
      answer: "안녕하세요 해당 제품은 욕실에서 사용이 가능한 제품입니다. 감사합니다.",
      answered: true,
      secret: false,
    },
    {
      id: 15,
      title: "재질 문의드립니다.",
      category: "제품문의",
      nickname: "aa",
      date: "2022.03.01",
      content: "해당 제품 플라스틱으로 만들어진건가요? 재질정보가 안보이네요",
      answer: "안녕하세요 해당 제품은 욕실에서 사용이 가능한 제품입니다. 감사합니다.",
      answered: true,
      secret: true,
    },
  ],
};

const getAsk: (filter: string, page: number) => () => Promise<ask> = (filter: string, page: number) => {
  return () =>
    new Promise(resolve => {
      setTimeout(() => {
        const content: content[] = JSON.parse(JSON.stringify(ask.content));
        const newContent = content.filter(value => {
          if (filter === "전체") return true;
          if (filter === value.category) return true;
        });
        const paged = newContent.slice((page - 1) * 5, page * 5);
        resolve({
          totalElement: newContent.length,
          categoryElement: [15, 3, 2, 5, 5],
          totalPage: Math.ceil(newContent.length / 5),
          content: paged,
        });
      }, 500);
    });
};

export default getAsk;
