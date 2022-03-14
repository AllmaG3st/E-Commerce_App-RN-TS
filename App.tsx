import React, { useCallback, useState } from "react";
import LottieView from "lottie-react-native";
import AppLoading from "expo-app-loading";

import OfflineNotice from "components/OfflineNotice";
import AuthContext from "./src/auth/context";
import Navigation from "./src/navigation";

import authStorage from "auth/storage";
import loading from "assets/animations/loading.json";
import { useLoadFonts } from "hooks/useLoadFonts";
import "./i18n.config";

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const fontsLoading = useLoadFonts();

  const restoreToken = useCallback(async () => {
    const user: any = await authStorage.getUser();

    if (user) setUser(user);
  }, []);

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Error during getting token")}
      />
    );

  if (fontsLoading) return <LottieView autoPlay loop source={loading} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <Navigation />
    </AuthContext.Provider>
  );
}
