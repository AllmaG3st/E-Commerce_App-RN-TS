import * as Font from "expo-font";
import LottieView from "lottie-react-native";

import { useLoadFonts } from "./src/hooks/useLoadFonts";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import AppButton from "./src/components/AppButton";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  const fontsLoading = useLoadFonts();

  if (fontsLoading)
    return (
      <LottieView
        autoPlay
        loop={false}
        source={require("./src/assets/animations/loading.json")}
      />
    );

  return <LoginScreen />;
}
