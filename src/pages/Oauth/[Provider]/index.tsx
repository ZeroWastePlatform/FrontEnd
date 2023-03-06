import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";

const Oauth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const { provider } = useParams();
  const { mutate } = useSetQueryMutate(
    code =>
      axios.post(`http://greenus.duckdns.org/api/auth/${provider}/token`, {
        code,
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
      }),
    ["google"],
    e => {
      localStorage.setItem("login-token", e.data.refreshToken);
      navigate("/");
      console.log(e);
    },
  );

  useEffect(() => {
    mutate(code);
  }, [code]);
  return <div>loading...</div>;
};

export default Oauth;
