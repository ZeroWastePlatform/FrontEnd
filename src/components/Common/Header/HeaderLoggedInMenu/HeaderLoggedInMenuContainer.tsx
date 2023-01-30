import React, { useState } from "react";
import HeaderLoggedInMenu from "./HeaderLoggedInMenu";

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

const HeaderLoggedInMenuContainer = () => {
  const [toggle, setToggle] = useState(false);
  return <HeaderLoggedInMenu menu={menu} toggle={toggle} setToggle={setToggle} />;
};

export default HeaderLoggedInMenuContainer;
