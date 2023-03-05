import MyOrderList from "./MyOrderList";

const selectList = [
  {
    id: 1,
    period: "기간",
  },
  {
    id: 2,
    period: "1개월 전 ",
  },
  {
    id: 3,
    period: "3개월 전 ",
  },
  {
    id: 4,
    period: "6개월 전 ",
  },
  {
    id: 5,
    period: "1년 전 ",
  },
  {
    id: 6,
    period: "3년 전 ",
  },
];

const MyOrderListContainer = () => {
  return <MyOrderList selectList={selectList} />;
};

export default MyOrderListContainer;
