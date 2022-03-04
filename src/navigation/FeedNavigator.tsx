import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import { ListingDetailScreen, ListingsScreen } from "screens";

import { FeedNavigatorParamList } from "types/data";

const Stack = createNativeStackNavigator<FeedNavigatorParamList>();

const FeedNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name="ListingDetails"
          component={ListingDetailScreen}
          options={{
            title: t("navigation.listingDetails"),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
