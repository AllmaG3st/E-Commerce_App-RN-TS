import { StyleSheet } from "react-native";
import { COLORS } from "config/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
