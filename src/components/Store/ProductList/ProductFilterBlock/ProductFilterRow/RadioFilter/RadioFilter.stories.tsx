import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioFilter from "./RadioFilter";

export default {
  title: "Store/ProductList/ProductFilterBlock/ProductFilterRow/RadioFilter",
  component: RadioFilter,
} as ComponentMeta<typeof RadioFilter>;

const Template: ComponentStory<typeof RadioFilter> = args => <RadioFilter {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  text: "10000원미만",
  value: "100000",
  name: "price",
};
