import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import { AccountScreen, MessagesScreen } from "screens";
import { AccountNavigatorParamList } from "types/data";

import { ROUTES } from "../config/routes";

const Stack = createNativeStackNavigator<AccountNavigatorParamList>();

const AccountNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.ACCOUNT}
        component={AccountScreen}
        options={{
          title: t("navigation.account"),
        }}
      />
      <Stack.Screen
        name={ROUTES.MESSAGES}
        component={MessagesScreen}
        options={{
          title: t("navigation.messages"),
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
