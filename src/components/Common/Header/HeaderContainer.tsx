import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atom/userInfo";
import Header from "./Header";

const HeaderContainer = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  return (
    <>
      <Header isLogin={userInfo.isLogin}></Header>
      <Outlet />
    </>
  );
};

export default HeaderContainer;
