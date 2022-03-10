import React from "react";
import LottieView from "lottie-react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import { useLoadFonts } from "hooks/useLoadFonts";
import Navigation from "./src/navigation";

import "./i18n.config";
import loading from "assets/animations/loading.json";

export default function App() {
  const fontsLoading = useLoadFonts();

  if (fontsLoading) return <LottieView autoPlay loop source={loading} />;

  return <Navigation />;
}
