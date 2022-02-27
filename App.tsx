import React, { useState } from "react";
import * as Font from "expo-font";
import LottieView from "lottie-react-native";
import { useTranslation } from "react-i18next";

import { useLoadFonts } from "./src/hooks/useLoadFonts";
import "./i18n.config";
import { View } from "react-native";
import Card from "./src/components/Card";
import ListingDetailScreen from "./src/screens/ListingDetailsScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import Screen from "./src/components/Screen";
import Icon from "./src/components/Icon";
import AccountScreen from "./src/screens/AccountScreen";
import ListItem from "./src/components/ListItem";
import { COLORS } from "./src/config/colors";
import ListingsScreen from "./src/screens/ListingsScreen";
import AppTextInput from "./src/components/AppTextInput";
import LoginScreen from "./src/screens/LoginScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import AppPicker from "components/AppPicker";
import { Category } from "types/data";

const categories: Category[] = [
  { label: "Furniture", value: 1 },
  { label: "Something", value: 2 },
  { label: "Something2", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState<Category>(categories[0]);
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
    <Screen>
      <AppTextInput iconName="email" placeHolder="Aleko" />
      <AppPicker
        selectedItem={category}
        onSelectedItem={(item: any) => setCategory(item)}
        items={categories}
        iconName="apps"
        placeHolder="Category"
      />
    </Screen>
  );
}
