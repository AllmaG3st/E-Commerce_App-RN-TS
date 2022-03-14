import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "auth/context";
import authStorage from "auth/storage";

export const useAuth = () => {
  const { user, setUser }: any = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = async (authToken: any) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, logout, login };
};
