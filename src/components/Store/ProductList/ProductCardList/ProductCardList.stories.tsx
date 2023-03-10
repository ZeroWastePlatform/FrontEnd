// import { action } from "@storybook/addon-actions";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import ProductCardList from "./ProductCardList";

// export default {
//   title: "Store/ProductList/ProductCardList",
//   component: ProductCardList,
// } as ComponentMeta<typeof ProductCardList>;

// const Template: ComponentStory<typeof ProductCardList> = args => <ProductCardList {...args} />;

// export const GeneralType = Template.bind({});
// GeneralType.args = {
//   data: {
//     count: 100,
//     rows: [
//       {
//         id: 1,
//         category: "1",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: 45,
//         price: 5900,
//         badges: 5,
//       },
//       {
//         id: 2,
//         category: "1",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: false,
//       },
//       {
//         id: 3,
//         category: "2",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: false,
//       },
//       {
//         id: 4,
//         category: "1",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: true,
//       },
//       {
//         id: 5,
//         category: "1",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: true,
//       },
//       {
//         id: 6,
//         category: "2",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: false,
//       },
//       {
//         id: 7,
//         category: "1",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: true,
//       },
//       {
//         id: 8,
//         category: "1",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: true,
//       },
//       {
//         id: 9,
//         category: "2",
//         brand: "그리너스",
//         title: "마일드 고체치약 30정입",
//         discountRate: "45",
//         price: "5900",
//         badges: ["best", "sale"],
//         liked: false,
//       },
//     ],
//   },
//   condition: {
//     category: "전체",
//     filter: [],
//     sort: "인기순",
//     page: 1,
//   },
//   setCondition: action("정렬변경"),
// };
