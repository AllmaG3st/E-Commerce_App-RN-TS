import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigators/AppNavigator";

import navigationTheme from "./config/navigationTheme";
import AuthNavigator from "./navigators/AuthNavigator";

export default function Navigation() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
