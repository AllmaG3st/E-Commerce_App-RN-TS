import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AccountScreen, ListingEditScreen, ListingsScreen } from "screens";

import { AppNavigatorParamList } from "types/data";
import FeedNavigator from "./FeedNavigator";

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
      component={AccountScreen}
      options={{
        title: "Account",
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
