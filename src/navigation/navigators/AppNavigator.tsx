import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import { ListingEditScreen } from "screens";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

import { AppNavigatorParamList } from "types/data";
import NewListingButton from "../NewListingButton";

import { COLORS } from "config/colors";
import { ROUTES } from "../config/routes";

const Tab = createBottomTabNavigator<AppNavigatorParamList>();

const AppNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.FEED_TAB}
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          title: t("navigation.listings"),
        }}
      />
      <Tab.Screen
        name={ROUTES.ADD_LISTING_TAB}
        component={ListingEditScreen}
        options={{
          tabBarButton: () => <NewListingButton />,
          title: t("navigation.addListing"),
        }}
      />
      <Tab.Screen
        name={ROUTES.ACCOUNT_TAB}
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          title: t("navigation.account"),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
