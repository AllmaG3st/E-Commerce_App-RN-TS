import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ListingDetailScreen, ListingsScreen } from "screens";

import { FeedNavigatorParamList } from "types/data";

const Stack = createNativeStackNavigator<FeedNavigatorParamList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
