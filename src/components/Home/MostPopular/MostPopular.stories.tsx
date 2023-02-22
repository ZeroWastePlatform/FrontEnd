import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getCategoryList } from "../../../utils/getCategoryList";
import MostPopular from "./MostPopular";

export default {
  title: "Home/MostPopular",
  component: MostPopular,
} as ComponentMeta<typeof MostPopular>;

const Template: ComponentStory<typeof MostPopular> = args => <MostPopular {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  categoryList: getCategoryList(),
};
