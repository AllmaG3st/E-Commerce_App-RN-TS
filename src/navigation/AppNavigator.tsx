import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ListingEditScreen } from "screens";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

import { AppNavigatorParamList } from "types/data";

const Tab = createBottomTabNavigator<AppNavigatorParamList>();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="ListingEditTab"
      component={ListingEditScreen}
      options={{
        title: "Edit Listing",
      }}
    />
    <Tab.Screen
      name="AccountTab"
      component={AccountNavigator}
      options={{
        headerShown: false,
        title: "Account",
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
