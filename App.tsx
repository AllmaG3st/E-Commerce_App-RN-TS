import React from "react";
import LottieView from "lottie-react-native";

import OfflineNotice from "components/OfflineNotice";
import Screen from "components/Screen";

import loading from "assets/animations/loading.json";
import { useLoadFonts } from "hooks/useLoadFonts";
import Navigation from "./src/navigation";
import "./i18n.config";

export default function App() {
  const fontsLoading = useLoadFonts();

  if (fontsLoading) return <LottieView autoPlay loop source={loading} />;

  return (
    <>
      <OfflineNotice />
      <Navigation />
    </>
  );
}
