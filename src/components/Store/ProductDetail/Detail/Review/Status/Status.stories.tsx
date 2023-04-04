import { ComponentStory, ComponentMeta } from "@storybook/react";
import Status from "./Status";

export default {
  title: "Store/ProductDetail/Detail/Review/Status",
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => (
  <div style={{ marginTop: "200px" }}>
    <Status {...args} />
  </div>
);

export const GeneralType = Template.bind({});
GeneralType.args = {
  avgrate: 3.6,
  rates: [1000, 200, 30, 3, 1],
  total: 1234,
};
