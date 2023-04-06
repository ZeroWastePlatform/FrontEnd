import { HeaderSubTitleDate, HeaderSubTitleLink, HeaderTitle, HeaderTitleBox } from "./Header.styles";

interface HeaderProps {
  title: string;
  subTitle?: string;
  link?: string;
}

const Header = ({ title, subTitle, link }: HeaderProps) => {
  return (
    <HeaderTitleBox>
      <HeaderTitle>{title}</HeaderTitle>
      {subTitle === "더보기" ? (
        <HeaderSubTitleLink to={link as string}>{subTitle}</HeaderSubTitleLink>
      ) : (
        <HeaderSubTitleDate>{subTitle}</HeaderSubTitleDate>
      )}
    </HeaderTitleBox>
  );
};

export default Header;
