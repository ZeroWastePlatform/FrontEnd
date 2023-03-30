import { ComponentStory, ComponentMeta } from "@storybook/react";
import filterList from "../ProductFilterData";
import ProductFilterRow from "./ProductFilterRow";

export default {
  title: "Store/ProductList/ProductFilterBlock/ProductFilterRow",
  component: ProductFilterRow,
} as ComponentMeta<typeof ProductFilterRow>;

const Template: ComponentStory<typeof ProductFilterRow> = args => <ProductFilterRow {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = filterList[0];
