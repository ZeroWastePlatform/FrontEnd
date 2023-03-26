import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";
import { setExpiresAt } from "../utils/setExpiresAt";

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const expireAt = localStorage.getItem("expiresAt");
    let token = localStorage.getItem("accessToken");

    // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때 토큰 재발급
    if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
      const body = {
        refreshToken,
      };
      const { data } = await axios.post(`${process.env.API_SERVER}auth/token/access`, body);
      token = data.accessToken;
      localStorage.setItem("accessToken", data.accessToken);
      setExpiresAt();
    }

    config.headers["Authorization"] = `Bearer ${token}`;
  } catch (err) {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  }
  return config;
};

const refreshErrorHandle = (err: any) => {
  localStorage.removeItem("refreshToken");
};

export { refresh, refreshErrorHandle };
