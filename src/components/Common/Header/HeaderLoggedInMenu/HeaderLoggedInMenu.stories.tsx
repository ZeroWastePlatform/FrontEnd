import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderLoggedInMenu from "./HeaderLoggedInMenu";

export default {
  title: "Common/Header/HeaderLoggedInMenu",
  component: HeaderLoggedInMenu,
} as ComponentMeta<typeof HeaderLoggedInMenu>;

const Template: ComponentStory<typeof HeaderLoggedInMenu> = args => <HeaderLoggedInMenu {...args} />;

export const GeneralType = Template.bind({});
GeneralType.args = {
  menu: [
    {
      path: "",
      text: "마이페이지",
    },
    {
      path: "",
      text: "나의 쇼핑",
    },
    {
      path: "",
      text: "고객센터",
    },
  ],
};
