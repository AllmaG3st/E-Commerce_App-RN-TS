import { StyleSheet } from "react-native";

export default (size: number, bgColor: string) =>
  StyleSheet.create({
    icon: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: bgColor,
      justifyContent: "center",
      alignItems: "center",
    },
  });
