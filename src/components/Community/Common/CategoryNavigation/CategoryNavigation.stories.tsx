import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategoryNavigation from "./CategoryNavigation";

export default {
  title: "Community/Common/CategoryNavigation",
  component: CategoryNavigation,
} as ComponentMeta<typeof CategoryNavigation>;

const Template: ComponentStory<typeof CategoryNavigation> = args => <CategoryNavigation />;

export const GeneralType = Template.bind({});
GeneralType.args = {};
