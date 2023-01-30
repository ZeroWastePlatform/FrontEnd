import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderLoggedInMenuLayout,
  HeaderLoggedInMenuProfileImg,
  HeaderLoggedInMenuBox,
  HeaderLoggedInMenuText,
} from "./HeaderLoggedInMenu.styles";

interface HeaderLoggedInMenuProps {
  menu: {
    path: string;
    text: string;
  }[];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderLoggedInMenu = ({ menu, toggle, setToggle }: HeaderLoggedInMenuProps) => {
  return (
    <HeaderLoggedInMenuLayout>
      <HeaderLoggedInMenuProfileImg onClick={() => setToggle(!toggle)} />
      {toggle && (
        <HeaderLoggedInMenuBox>
          {menu.map((item, idx) => (
            <Link to={item.path} key={idx}>
              <HeaderLoggedInMenuText>{item.text}</HeaderLoggedInMenuText>
            </Link>
          ))}
          <HeaderLoggedInMenuText>로그아웃</HeaderLoggedInMenuText>
        </HeaderLoggedInMenuBox>
      )}
    </HeaderLoggedInMenuLayout>
  );
};

export default HeaderLoggedInMenu;
