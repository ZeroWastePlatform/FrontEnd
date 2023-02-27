import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCarousel from "./Carousel";

export default {
  title: "Store/ProductList/ProductCarousel",
  component: ProductCarousel,
} as ComponentMeta<typeof ProductCarousel>;

const Template: ComponentStory<typeof ProductCarousel> = args => (
  <ProductCarousel
    {...args}
    data={[
      "http://localhost:8000/images/banner1.jpg",
      "http://localhost:8000/images/banner2.jpg",
      "http://localhost:8000/images/banner3.jpg",
    ]}
    order={1}
    changeOrder={action("이동하기")}
    checkActiveItem={index => index === 0}
  />
);

export const HomeType = Template.bind({});
HomeType.args = {
  type: "Home",
};

export const StoreType = Template.bind({});
StoreType.args = {
  type: "Store",
};
