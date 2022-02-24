import { ImageSourcePropType } from "react-native";

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

export interface Listing {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
}
