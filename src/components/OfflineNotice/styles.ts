import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { COLORS } from "config/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    height: 50,
    marginTop: Constants.statusBarHeight,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
  },
});
