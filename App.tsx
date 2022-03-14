import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

import OfflineNotice from "components/OfflineNotice";
import AuthContext from "./src/auth/context";
import Navigation from "./src/navigation";

import authStorage from "auth/storage";
import loading from "assets/animations/loading.json";
import { useLoadFonts } from "hooks/useLoadFonts";
import "./i18n.config";
import jwtDecode from "jwt-decode";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const restoreToken = async () => {
      const token = await authStorage.getToken();

      if (!token) return;

      setUser(jwtDecode(token));
    };

    restoreToken();
  }, []);

  const fontsLoading = useLoadFonts();

  if (fontsLoading) return <LottieView autoPlay loop source={loading} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <Navigation />
    </AuthContext.Provider>
  );
}
