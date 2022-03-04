import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import { LoginScreen, RegisterScreen, WelcomeScreen } from "screens";

import { AuthNavigatorParamList } from "types/data";
import { ROUTES } from "navigation/config/routes";

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={{
          title: t("authScreen.login"),
        }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={RegisterScreen}
        options={{
          title: t("authScreen.register"),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
