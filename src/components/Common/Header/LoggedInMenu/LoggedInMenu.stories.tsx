import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoggedInMenu from "./LoggedInMenu";

export default {
  title: "Common/Header/LoggedInMenu",
  component: LoggedInMenu,
} as ComponentMeta<typeof LoggedInMenu>;

const Template: ComponentStory<typeof LoggedInMenu> = args => <LoggedInMenu {...args} />;

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
