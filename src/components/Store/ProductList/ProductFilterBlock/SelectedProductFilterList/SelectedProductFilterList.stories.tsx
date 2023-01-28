import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectedProductFilterList from "./SelectedProductFilterList";

export default {
  title: "Store/ProductList/ProductFilterBlock/SelectedProductFilterList",
  component: SelectedProductFilterList,
} as ComponentMeta<typeof SelectedProductFilterList>;

const Template: ComponentStory<typeof SelectedProductFilterList> = args => <SelectedProductFilterList {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  selectedFilters: [
    { text: "잇츠베러", name: null, value: "1" },
    { text: "젤러스 스윗", name: null, value: "2" },
    { text: "10000원이하", name: "price", value: "3" },
    { text: "무료배송", name: null, value: "4" },
    { text: "할인 상품", name: null, value: "5" },
    { text: "품절상품제외", name: null, value: "6" },
  ],
};
