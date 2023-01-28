import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBoxFilter from "./CheckBoxFilter";

export default {
  title: "Store/ProductList/ProductFilterBlock/ProductFilterRow/CheckBoxFilter",
  component: CheckBoxFilter,
} as ComponentMeta<typeof CheckBoxFilter>;

const Template: ComponentStory<typeof CheckBoxFilter> = args => <CheckBoxFilter {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  value: "잇츠베러",
  text: "잇츠베러",
};
