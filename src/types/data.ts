import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type MaterialCommunityIconsType = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export interface MenuItem {
  title: string;
  icon: {
    name: string;
    backgroundColor: string;
  };
}

export interface Category {
  backgroundColor?: string;
  icon?: MaterialCommunityIconsType;
  label: string;
  value: number;
}

export interface Listing {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

//!Navigator Types

//Auth Navigator Types
export type AuthNavigatorParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type AuthNavigationGenericProp<
  T extends keyof AuthNavigatorParamList & string
> = NativeStackNavigationProp<AuthNavigatorParamList, T>;

export type AuthRouteGenericProp<
  T extends keyof AuthNavigatorParamList & string
> = RouteProp<AuthNavigatorParamList, T>;

//Feed Navigator Types
export type FeedNavigatorParamList = {
  Listings: undefined;
  ListingDetails: {
    item: Listing;
  };
};

export type FeedNavigationGenericProp<
  T extends keyof FeedNavigatorParamList & string
> = BottomTabNavigationProp<FeedNavigatorParamList, T>;

export type FeedRouteGenericProp<
  T extends keyof FeedNavigatorParamList & string
> = RouteProp<FeedNavigatorParamList, T>;

//App Navigator Types
export type AppNavigatorParamList = {
  Feed: FeedNavigatorParamList;
  ListingEditTab: undefined;
  AccountTab: undefined;
};
