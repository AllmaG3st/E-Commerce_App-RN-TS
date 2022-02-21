import * as Font from "expo-font";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import LottieView from "lottie-react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import AppButton from "./src/components/AppButton";

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

  return <WelcomeScreen />;
}
