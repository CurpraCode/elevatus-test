import axios, { AxiosError } from "axios";
// import useAuthStore from "../hooks/useAuthStore";
import { BASE_URL } from "./config";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
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
