import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectedProductFilter from "./SelectedProductFilter";

export default {
  title: "Store/ProductList/ProductFilterBlock/SelectedProductFilterList/SelectedProductFilter",
  component: SelectedProductFilter,
} as ComponentMeta<typeof SelectedProductFilter>;

const Template: ComponentStory<typeof SelectedProductFilter> = args => <SelectedProductFilter {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  name: "잇츠베러",
};
