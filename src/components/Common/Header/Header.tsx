import { HeaderLayout } from "./Header.styles";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <HeaderLayout>
      <div>헤더입니다.</div>
      <Outlet />
    </HeaderLayout>
  );
}

export default Header;
