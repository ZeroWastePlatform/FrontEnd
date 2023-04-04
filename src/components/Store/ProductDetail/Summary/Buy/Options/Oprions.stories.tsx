import { ComponentStory, ComponentMeta } from "@storybook/react";
import Options from "./Options";

export default {
  title: "Store/ProductDetail/Summary/Buy/Options",
  component: Options,
} as ComponentMeta<typeof Options>;

const Template: ComponentStory<typeof Options> = args => (
  <div style={{ width: "660px" }}>
    <Options {...args} />
  </div>
);

export const GeneralType = Template.bind({});
GeneralType.args = {
  title: "올바른 린스바",
  require: [
    { title: "파란색", price: 0 },
    { title: "검정색", price: 1000 },
  ],
  bonus: [{ title: "비누망", price: 1000 }],
  selectedOptions: [
    { title: "올바른 린스바", price: 9500, count: 0 },
    { title: "비누망", price: 1000, count: 0 },
  ],
  totalPrice: 10500,
  changeCount: () => {
    return () => {
      console.log(1);
    };
  },
};
