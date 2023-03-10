import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";

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

      const { data } = await axios.post(`${process.env.API_SERVER}/api/auth/token/access`, body);
      console.log("data", data);
      token = data.accessToken;
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("expiresAt", moment().add(30, "m").format("yyyy-MM-DD HH:mm:ss"));
    }

    config.headers["Authorization"] = `Bearer ${token}`;
  } catch (err) {
    console.log(err);
    localStorage.removeItem("refreshToken");
  }
  return config;
};

const refreshErrorHandle = (err: any) => {
  console.log("err :", err);
  localStorage.removeItem("refreshToken");
};

export { refresh, refreshErrorHandle };
