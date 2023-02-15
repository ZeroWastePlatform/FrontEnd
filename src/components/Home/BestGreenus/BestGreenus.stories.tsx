import { ComponentStory, ComponentMeta } from "@storybook/react";
import BestGreenus from "./BestGreenus";

export default {
  title: "Home/BestGreenus",
  component: BestGreenus,
} as ComponentMeta<typeof BestGreenus>;

const Template: ComponentStory<typeof BestGreenus> = args => <BestGreenus />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
