import moment from "moment";

export const setExpiresAt = () => {
  return localStorage.setItem("expiresAt", moment().add(30, "m").format("yyyy-MM-DD HH:mm:ss"));
};
