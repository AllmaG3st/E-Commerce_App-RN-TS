import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import LottieView from "lottie-react-native";
import { useTranslation } from "react-i18next";

import { useLoadFonts } from "./src/hooks/useLoadFonts";
import "./i18n.config";
import { Button, Image, View } from "react-native";
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
import ListingEditScreen from "screens/ListingEditScreen";
import { AppFormField } from "components/forms";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const fontsLoading = useLoadFonts();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) alert("You need to enable permission to access photos");
  };

  const selectImage = async () => {
    try {
      const result: any = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error: any) {
      console.log("Error reading an image", error.message);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

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
      {/* <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      <ListingEditScreen />
    </Screen>
  );
}
