import React, { useState } from "react";
import LottieView from "lottie-react-native";

import OfflineNotice from "components/OfflineNotice";
import AuthContext from "./src/auth/context";

import loading from "assets/animations/loading.json";
import { useLoadFonts } from "hooks/useLoadFonts";
import Navigation from "./src/navigation";
import "./i18n.config";

export default function App() {
  const [user, setUser] = useState({});

  const fontsLoading = useLoadFonts();
  console.log(user);

  if (fontsLoading) return <LottieView autoPlay loop source={loading} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <Navigation />
    </AuthContext.Provider>
  );
}
