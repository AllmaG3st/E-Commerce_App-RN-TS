import { PixelRatio, StyleSheet } from "react-native";

import { COLORS } from "../../config/colors";

export default StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    paddingBottom: 0,
    backgroundColor: COLORS.light,
  },
});
