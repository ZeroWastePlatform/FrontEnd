import { Outlet } from "react-router-dom";
import Header from "./Header";

const HeaderContainer = () => {
  const isLogin = false;
  return (
    <>
      <Header isLogin={isLogin}></Header>
      <Outlet />
    </>
  );
};

export default HeaderContainer;
