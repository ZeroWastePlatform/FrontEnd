import moment from "moment";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userInfoAtom } from "../../../atom/userInfo";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import customAPI from "../../../lib/customAPI";
import { setExpiresAt } from "../../../utils/setExpiresAt";

const Oauth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const { provider } = useParams();
  const { mutate } = useSetQueryMutate(
    code =>
      customAPI.post(`auth/${provider}/token`, {
        code,
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
      }),
    [provider],
    e => {
      if (e.data.newMember) {
        setUserInfo(prev => ({ ...prev, accessToken: e.data.accessToken }));
        navigate("/signup");
      } else {
        localStorage.setItem("refreshToken", e.data.refreshToken);
        localStorage.setItem("accessToken", e.data.accessToken);
        setExpiresAt();
        window.location.href = "/";
      }
    },
  );

  useEffect(() => {
    mutate(code);
  }, [code]);
  return <div>loading...</div>;
};

export default Oauth;
