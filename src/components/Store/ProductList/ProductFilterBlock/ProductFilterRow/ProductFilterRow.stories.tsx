import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductFilterRow from "./ProductFilterRow";

export default {
  title: "Store/ProductList/ProductFilterBlock/ProductFilterRow",
  component: ProductFilterRow,
} as ComponentMeta<typeof ProductFilterRow>;

const Template: ComponentStory<typeof ProductFilterRow> = args => <ProductFilterRow {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {
  title: "브랜드",
  list: [
    { text: "잇츠베러", value: "0" },
    { text: "젤러스 스윗", value: "1" },
    { text: "비건 포레스트", value: "2" },
    { text: "저스트에그", value: "3" },
    { text: "비건타민", value: "4" },
    { text: "바오푸드", value: "5" },
    { text: "로마린다", value: "6" },
  ],
};

export const Radio = Template.bind({});
Radio.args = {
  title: "가격",
  list: [
    { text: "10000원이하", value: "7", name: "price" },
    { text: "10000~30000", value: "8", name: "price" },
    { text: "30000~50000", value: "9", name: "price" },
    { text: "50000이상", value: "10", name: "price" },
  ],
};
