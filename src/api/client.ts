import { create } from "apisauce";

import settings from "config/settings";
import authStorage from "auth/storage";
import cache from "../utils/cache";

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();

  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
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
