import { ComponentStory, ComponentMeta } from "@storybook/react";
import Info from "./Info";

export default {
  title: "Store/ProductDetail/Detail/Info",
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = args => <Info {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  data: [
    "http://localhost:8000/images/test1.jpg",
    "http://localhost:8000/images/test2.jpg",
    "http://localhost:8000/images/test3.jpg",
  ],
};
