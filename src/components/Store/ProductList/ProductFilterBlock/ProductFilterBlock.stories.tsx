import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductFilterBlock from "./ProductFilterBlock";
import { action } from "@storybook/addon-actions";

export default {
  title: "Store/ProductList/ProductFilterBlock",
  component: ProductFilterBlock,
} as ComponentMeta<typeof ProductFilterBlock>;

const Template: ComponentStory<typeof ProductFilterBlock> = args => <ProductFilterBlock {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  condition: {
    category: "전체",
    filter: [],
    sort: "인기순",
    page: 1,
  },
  setCheckboxFilter: action("체크박스 선택"),
  setRadioFilter: action("라디오 선택"),
};
