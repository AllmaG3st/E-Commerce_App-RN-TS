import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();

  if (!token) return null;

  return jwtDecode(token);
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error deleting the auth token", error);
  }
};

export default {
  storeToken,
  getUser,
  removeToken,
};
