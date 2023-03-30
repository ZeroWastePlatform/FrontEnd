import axios from "axios";
import { refresh, refreshErrorHandle } from "./refresh";

const customAPI = axios.create({
  baseURL: process.env.API_SERVER,
  params: {},
});

customAPI.interceptors.request.use(refresh, refreshErrorHandle);

export default customAPI;
