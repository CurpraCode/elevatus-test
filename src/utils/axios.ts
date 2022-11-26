import axios, { AxiosError } from "axios";
// import useAuthStore from "../hooks/useAuthStore";
import { BASE_URL } from "./config";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "accept-account": " 961c06eb-7e25-406c-87d5-d0742e09d96c",
    "accept-company": "900a776e-a060-422e-a5e3-979ef669f16b",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError && error.response?.status === 401) {
      //   useAuthStore.setState({ signedInAs: undefined });
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
