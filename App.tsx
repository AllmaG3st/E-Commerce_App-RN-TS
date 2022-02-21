import WelcomeScreen from "./src/screens/WelcomeScreen";
import * as Font from "expo-font";

import { useEffect, useState } from "react";
import { useLoadFonts } from "./src/hooks/useLoadFonts";

export default function App() {
  useLoadFonts();

  return <WelcomeScreen />;
}
