import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen, MessagesScreen } from "screens";
import { AccountNavigatorParamList } from "types/data";

const Stack = createNativeStackNavigator<AccountNavigatorParamList>();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
