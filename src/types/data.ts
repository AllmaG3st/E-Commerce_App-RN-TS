import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

//!Common
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
  targetScreen?: string;
}

export interface Category {
  backgroundColor?: string;
  icon?: MaterialCommunityIconsType;
  label: string;
  value: number;
}

export type useApiProps = {
  data: any[];
  error: boolean;
  isLoading: boolean;
  request: () => Promise<any>;
};

//!Contexts

export type userAuthTokenType = {
  email: string;
  iat: number;
  name: string;
  userId: number;
};

export type authContextType =
  | {
      user: userAuthTokenType | {};
      setUser: (user: userAuthTokenType) => void;
    }
  | {};

//!Listings

type ListingImage = {
  url: string;
  thumbnailUrl?: string;
};

type ListingRequestCategory = {
  backgroundColor: string;
  icon: string;
  label: string;
  value: 5;
};

type Location = {
  latitude: number;
  longitude: number;
};

export interface ListingRequest {
  category: ListingRequestCategory;
  description: string;
  images: string[];
  location: Location;
  price: string;
  title: string;
}

export interface ListingResponse {
  categoryId: 1;
  id: number;
  images: ListingImage[];
  location: Location;
  price: number;
  title: string;
  userId: number;
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
    item: ListingResponse;
  };
};

export type FeedNavigationGenericProp<
  T extends keyof FeedNavigatorParamList & string
> = NativeStackNavigationProp<FeedNavigatorParamList, T>;

export type FeedRouteGenericProp<
  T extends keyof FeedNavigatorParamList & string
> = RouteProp<FeedNavigatorParamList, T>;

//Account Navigator Types
export type AccountNavigatorParamList = {
  Account: undefined;
  Messages: undefined;
};

export type AccountNavigationGenericProp<
  T extends keyof AccountNavigatorParamList & string
> = NativeStackNavigationProp<AccountNavigatorParamList, T>;

export type AccountRouteGenericProp<
  T extends keyof AccountNavigatorParamList & string
> = RouteProp<AccountNavigatorParamList, T>;

//App Navigator Types
export type AppNavigatorParamList = {
  FeedTab: FeedNavigatorParamList;
  AddListingTab: undefined;
  AccountTab: AccountNavigatorParamList;
};

export type AppNavigationGenericProp<
  T extends keyof AppNavigatorParamList & string
> = BottomTabNavigationProp<AppNavigatorParamList, T>;
