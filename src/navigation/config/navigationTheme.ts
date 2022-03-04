import { DefaultTheme } from "@react-navigation/native";
import { COLORS } from "config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    background: COLORS.white,
  },
};
