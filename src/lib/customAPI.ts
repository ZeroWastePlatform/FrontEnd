import axios from "axios";
import { refresh, refreshErrorHandle } from "./refresh";

console.log(process.env);
const customAPI = axios.create({
  baseURL: "http://greenus.duckdns.org/",
  params: {},
});

customAPI.interceptors.request.use(refresh, refreshErrorHandle);

export default customAPI;
