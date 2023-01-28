import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCarousel from "./ProductCarousel";

export default {
  title: "Store/ProductList/ProductCarousel",
  component: ProductCarousel,
} as ComponentMeta<typeof ProductCarousel>;

const Template: ComponentStory<typeof ProductCarousel> = args => <ProductCarousel {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  data: [
    "http://localhost:8000/images/test1.jpg",
    "http://localhost:8000/images/test2.jpg",
    "http://localhost:8000/images/test3.jpg",
  ],
  order: 1,
  movePrevOrder: action("이전사진으로이동"),
  moveNextOrder: action("다음사진으로이동"),
};
