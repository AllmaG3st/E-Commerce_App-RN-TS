import { StyleSheet } from "react-native";

import { COLORS } from "config/colors";

export default StyleSheet.create({
  error: {
    backgroundColor: COLORS.white,
    right: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    position: "absolute",
  },
});
