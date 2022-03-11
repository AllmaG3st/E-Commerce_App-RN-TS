import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigators/AppNavigator";

import AuthNavigator from "./navigators/AuthNavigator";
import AuthContext from "../auth/context";
import { authContextType } from "types/data";

import navigationTheme from "./config/navigationTheme";

export default function Navigation() {
  const { user }: any = useContext(AuthContext);

  return (
    <NavigationContainer theme={navigationTheme}>
      {user.name ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
