import React from "react";
import { HeaderSubTitle, HeaderTitle, HeaderTitleBox } from "./Header.styles";

interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <HeaderTitleBox>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubTitle light={subTitle !== "더보기"}>{subTitle}</HeaderSubTitle>
    </HeaderTitleBox>
  );
};

export default Header;
