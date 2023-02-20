import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectBox from "./SelectBox";

export default {
  title: "Store/ProductBuy/OrderInfo/SelectBox",
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = args => <SelectBox {...args} />;

export const GeneralType = Template.bind({});
