import * as Font from "expo-font";
import LottieView from "lottie-react-native";
import { useTranslation } from "react-i18next";

import { useLoadFonts } from "./src/hooks/useLoadFonts";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import AppButton from "./src/components/AppButton";
import LoginScreen from "./src/screens/LoginScreen";
import "./i18n.config";
import { View } from "react-native";
import Card from "./src/components/Card";
import ListingDetailScreen from "./src/screens/ListingDetailsScreen";

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

  return (
    // <ListingDetailScreen />
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Red Jacket"
        subTitle="$100"
        image={require("./src/assets/joystick.jpg")}
      />
    </View>
  );
}
