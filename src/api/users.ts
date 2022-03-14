import apiClient from "./client";

const register = (userInfo: any) => apiClient.post("/users", userInfo);

export default { register };
