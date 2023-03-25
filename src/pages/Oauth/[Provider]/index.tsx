import moment from "moment";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import customAPI from "../../../lib/customApi";
import { setExpiresAt } from "../../../utils/setExpiresAt";

const Oauth = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const { provider } = useParams();
  const { mutate } = useSetQueryMutate(
    code =>
      customAPI.post(`auth/${provider}/token`, {
        code,
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
      }),
    [provider],
    e => {
      localStorage.setItem("refreshToken", e.data.refreshToken);
      localStorage.setItem("accessToken", e.data.accessToken);
      setExpiresAt();
      window.location.href = "/";
    },
  );

  useEffect(() => {
    mutate(code);
  }, [code]);
  return <div>loading...</div>;
};

export default Oauth;
