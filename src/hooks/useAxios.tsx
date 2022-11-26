import { useCallback, useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";
import axiosWithAuth from "../utils/axios";
import axiosWithoutAuth from "axios";
import { toast } from "react-toastify";

export interface UseAxiosOptions {
  method?: "POST" | "GET" | "PATCH" | "PUT";
  url: string;
  data?: unknown;
  successMessage?: string;
  failureMessages?: { [key: number]: string };
  withAuth?: boolean;
}

const useAxios = (initialRequest?: UseAxiosOptions) => {
  const [isLoading, setIsLoading] = useState(!!initialRequest);
  // axios can send any json data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [error, setError] = useState<unknown>();

  const savedInitialRequest = useRef(initialRequest);

  const request = useCallback(
    async ({
      method = "GET",
      url,
      data,
      successMessage,
      failureMessages,
      withAuth = true,
    }: UseAxiosOptions) => {
      try {
        const axios = withAuth ? axiosWithAuth : axiosWithoutAuth;

        setIsLoading(true);
        const { data: responseData } = await axios.request({
          method,
          url,
          data,
        });

        if (successMessage) {
          toast.success(successMessage);
        }

        setData(responseData);
        return { data: responseData };
      } catch (error) {
        console.error(error);
        let message = "Something went wrong, please try again.";
        if (
          error instanceof AxiosError &&
          error.response?.status &&
          failureMessages?.[error.response.status]
        ) {
          message = failureMessages[error.response.status];
        }

        toast.error(message);

        setError(error);
        return { error };
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (savedInitialRequest.current) request(savedInitialRequest.current);
  }, [savedInitialRequest, request]);

  return { isLoading, request, data, error };
};

export default useAxios;
