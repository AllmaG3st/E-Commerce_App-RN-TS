import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.20.34:9000/api",
});

export default apiClient;
