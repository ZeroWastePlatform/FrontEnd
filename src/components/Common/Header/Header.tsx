import { Link } from "react-router-dom";
import {
  HeaderBagImg,
  HeaderBoldText,
  HeaderHeartImg,
  HeaderLayout,
  HeaderLogoImg,
  HeaderNotLoggedInMenuBox,
  HeaderText,
} from "./Header.styles";
import HeaderLoggedInMenuContainer from "./HeaderLoggedInMenu/HeaderLoggedInMenuContainer";
import HeaderSearchContainer from "./HeaderSearch/HeaderSearchContainer";

interface HeaderProps {
  isLogin: boolean;
}

const Header = ({ isLogin }: HeaderProps) => {
  return (
    <HeaderLayout>
      <Link to="/">
        <HeaderLogoImg />
      </Link>
      <Link to="/store">
        <HeaderBoldText>스토어</HeaderBoldText>
      </Link>
      <Link to="/community">
        <HeaderBoldText>커뮤니티</HeaderBoldText>
      </Link>
      <HeaderSearchContainer />
      {isLogin && (
        <Link to="/">
          <HeaderHeartImg />
        </Link>
      )}
      <Link to="/">
        <HeaderBagImg />
      </Link>
      {isLogin ? (
        <HeaderLoggedInMenuContainer />
      ) : (
        <HeaderNotLoggedInMenuBox>
          <Link to="/login">
            <HeaderText>로그인</HeaderText>
          </Link>
          |
          <Link to="/">
            <HeaderText>고객센터</HeaderText>
          </Link>
        </HeaderNotLoggedInMenuBox>
      )}
    </HeaderLayout>
  );
};

export default Header;
