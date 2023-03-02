import MyOrderList from "./MyOrderList";

const selectList = [
  {
    id: 1,
    period: "기간",
  },
  {
    id: 2,
    period: "1주 ",
  },
  {
    id: 3,
    period: "2주 ",
  },
];

const MyOrderListContainer = () => {
  return <MyOrderList selectList={selectList} />;
};

export default MyOrderListContainer;
