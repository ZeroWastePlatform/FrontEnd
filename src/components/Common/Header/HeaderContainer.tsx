import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginUserAtom } from "../../../atom/loginuser";
import Header from "./Header";

const HeaderContainer = () => {
  const { login } = useRecoilValue(isLoginUserAtom);
  return (
    <>
      <Header isLogin={login}></Header>
      <Outlet />
    </>
  );
};

export default HeaderContainer;
