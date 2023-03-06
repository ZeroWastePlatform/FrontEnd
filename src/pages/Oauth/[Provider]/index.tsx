import moment from "moment";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../../atom/userInfo";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import customAPI from "../../../lib/customApi";

const Oauth = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const code = new URL(window.location.href).searchParams.get("code");
  const { provider } = useParams();
  console.log("userInfo :", userInfo);
  const { mutate } = useSetQueryMutate(
    code =>
      customAPI.post(`/api/auth/${provider}/token`, {
        code,
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
      }),
    [provider],
    e => {
      localStorage.setItem("refreshToken", e.data.refreshToken);
      localStorage.setItem("accessToken", e.data.accessToken);
      localStorage.setItem("expiresAt", moment().add(30, "m").format("yyyy-MM-DD HH:mm:ss"));
      window.location.href = "/";
    },
  );

  useEffect(() => {
    mutate(code);
  }, [code]);
  return <div>loading...</div>;
};

export default Oauth;
