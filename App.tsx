import * as Font from "expo-font";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import LottieView from "lottie-react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  const fontsLoading = useLoadFonts();
  console.log(fontsLoading);
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
