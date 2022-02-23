import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export default StyleSheet.create({
  text: {
    color: COLORS.dark,
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.light,
  },
});
