import { StyleSheet } from "react-native";

import { COLORS } from "./colors";

export default StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.light,
  },
  text: {
    color: COLORS.dark,
    fontFamily: "open-sans",
    fontSize: 17,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.light,
    padding: 10,
    width: "100%",
    overflow: "hidden",
  },
});
