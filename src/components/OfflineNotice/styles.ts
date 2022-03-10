import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "config/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    height: 50,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
  },
});
