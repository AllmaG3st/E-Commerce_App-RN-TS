import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ListingEditScreen } from "screens";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

import { AppNavigatorParamList } from "types/data";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator<AppNavigatorParamList>();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEditTab"
      component={ListingEditScreen}
      options={{
        title: "Edit Listing",
        tabBarButton: () => <NewListingButton />,
      }}
    />
    <Tab.Screen
      name="AccountTab"
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        title: "Account",
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
