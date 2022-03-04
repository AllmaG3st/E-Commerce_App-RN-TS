import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ListingDetailScreen, ListingsScreen } from "screens";
import { FeedNavigatorParamList } from "types/data";

const Stack = createNativeStackNavigator<FeedNavigatorParamList>();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
    }}
  >
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
