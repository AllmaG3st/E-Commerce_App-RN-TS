import { create } from "apisauce";
import cache from "../utils/cache";

const apiClient = create({
  baseURL: "http://192.168.20.61:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig): Promise<any> => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data: any = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
