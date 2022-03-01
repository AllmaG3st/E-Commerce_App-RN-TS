import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ImageSourcePropType } from "react-native";

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
