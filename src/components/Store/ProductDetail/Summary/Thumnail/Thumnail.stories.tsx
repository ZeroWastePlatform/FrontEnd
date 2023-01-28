import { ComponentStory, ComponentMeta } from "@storybook/react";
import Thumnail from "./Thumnail";

export default {
  title: "Store/ProductDetail/Summary/Thumnail",
  component: Thumnail,
} as ComponentMeta<typeof Thumnail>;

const Template: ComponentStory<typeof Thumnail> = args => <Thumnail {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  photos: [
    "http://localhost:8000/images/test1.jpg",
    "http://localhost:8000/images/test2.jpg",
    "http://localhost:8000/images/test3.jpg",
  ],
};
