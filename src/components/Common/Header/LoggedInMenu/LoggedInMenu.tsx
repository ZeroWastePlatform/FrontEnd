import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoggedInMenuLayout, LoggedInMenuProfileImg, LoggedInMenuBox, LoggedInMenuText } from "./LoggedInMenu.styles";

interface LoggedInMenuProps {
  menu: {
    path: string;
    text: string;
  }[];
}

const LoggedInMenu = ({ menu }: LoggedInMenuProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <LoggedInMenuLayout>
      <LoggedInMenuProfileImg onClick={() => setToggle(!toggle)} />
      {toggle && (
        <LoggedInMenuBox>
          {menu.map((item, idx) => (
            <Link to={item.path} key={idx}>
              <LoggedInMenuText>{item.text}</LoggedInMenuText>
            </Link>
          ))}
          <LoggedInMenuText>로그아웃</LoggedInMenuText>
        </LoggedInMenuBox>
      )}
    </LoggedInMenuLayout>
  );
};

export default LoggedInMenu;
