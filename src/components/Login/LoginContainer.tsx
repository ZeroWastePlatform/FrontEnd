import React from "react";
import { useSetRecoilState } from "recoil";
import { isLoginUserAtom } from "../../atom/loginuser";
import Login from "./Login";

const LoginContainer = () => {
  return <Login />;
};

export default LoginContainer;
