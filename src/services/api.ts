import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    let typeParam = "&";

    if (config.url?.indexOf("?") === -1) {
      typeParam = "?";
    }
    config.url += `${typeParam}api_key=${process.env.REACT_APP_API_KEY}`;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default api;
