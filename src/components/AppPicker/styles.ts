import { COLORS } from "config/colors";
import { StyleSheet } from "react-native";

export default (error?: string, visible?: boolean) =>
  StyleSheet.create({
    textInputContainer: {
      borderColor: error && visible ? COLORS.danger : "white",
      borderWidth: error && visible ? 2 : 0,
    },
    text: {
      flex: 1,
      fontSize: 18,
      textAlign: "center",
    },
    placeHolder: {
      flex: 1,
      color: COLORS.medium,
      textAlign: "center",
    },
  });
  
