import React from "react";
import { useSetRecoilState } from "recoil";
import { isLoginUserAtom } from "../../atom/loginuser";
import Login from "./Login";

const LoginContainer = () => {
  const setLogin = useSetRecoilState(isLoginUserAtom);
  const useTestAccount = () => {
    setLogin(prev => ({ ...prev, login: true, id: 1 }));
  };
  return <Login useTestAccount={useTestAccount} />;
};

export default LoginContainer;
