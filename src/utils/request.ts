import axiosInstance from "@/apis/axios";
const host = "https://api-placeholder.herokuapp.com/api/v2";
// need split to get type
export const request: any = (url: string, options: any, config: any) => {
  url = host + url;
  switch (options.method) {
    case "GET":
      return axiosInstance.get(url, { params: options.params });
    case "POST":
      return axiosInstance.post(url, options.body, config);
    case "DELETE":
      return axiosInstance.delete(url, { data: options.body });
    case "PUT":
      return axiosInstance.put(url, options.body);
    default:
      throw new Error("unknown request method!");
  }
};
