import React from "react";
import LoggedInMenu from "./LoggedInMenu";

const menu = [
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
];

const LoggedInMenuContainer = () => {
  return <LoggedInMenu menu={menu} />;
};

export default LoggedInMenuContainer;
