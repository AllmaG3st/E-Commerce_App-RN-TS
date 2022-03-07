import React from "react";
import LottieView from "lottie-react-native";

import { useLoadFonts } from "./src/hooks/useLoadFonts";
import Navigation from "./src/navigation";
import "./i18n.config";

import loading from "assets/animations/loading.json";

export default function App() {
  const fontsLoading = useLoadFonts();

  if (fontsLoading) return <LottieView autoPlay loop source={loading} />;

  return <Navigation />;
}
