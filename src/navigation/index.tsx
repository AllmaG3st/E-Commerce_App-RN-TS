import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigators/AppNavigator";

import AuthNavigator from "./navigators/AuthNavigator";
import AuthContext from "../auth/context";
import { useAuth } from "hooks/useAuth";

import navigationTheme from "./config/navigationTheme";

export default function Navigation() {
  const { user }: any = useAuth();

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
