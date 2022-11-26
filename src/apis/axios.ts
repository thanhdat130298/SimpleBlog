/* eslint-disable prettier/prettier */
import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api-placeholder.herokuapp.com/api/v2",
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  // handle on success
  (res: AxiosResponse) => {
    console.log(res);
    return res.data.data.items || res.data.data;
  },
  // handle on error
  async (err: AxiosError) => {
    const data = err?.response?.data as any;
    if (data?.error?.message) {
      console.log("ERROR: ", data);
    }
    return Promise.reject(data);
  }
);

export default axiosInstance;
