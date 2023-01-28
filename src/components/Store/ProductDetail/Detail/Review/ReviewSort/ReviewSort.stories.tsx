import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReviewSort from "./ReviewSort";

export default {
  title: "Store/ProductDetail/Detail/Review/ReviewSort",
  component: ReviewSort,
} as ComponentMeta<typeof ReviewSort>;

const Template: ComponentStory<typeof ReviewSort> = args => <ReviewSort {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  sort: "베스트순",
  setSort: action("정렬변경"),
};
