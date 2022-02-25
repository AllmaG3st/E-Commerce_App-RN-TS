import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "config/colors";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.danger,
    width: width / 5,
    minWidth: 70,
    height: "100%",
  },
});
