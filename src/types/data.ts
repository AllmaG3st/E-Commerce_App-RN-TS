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

export interface Category {
  backgroundColor: string;
  icon: string;
  label: string;
  value: number;
}

export interface Listing {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

export interface PickerItemComponentProps {
  label?: string;
  onPress?: () => void;
}
