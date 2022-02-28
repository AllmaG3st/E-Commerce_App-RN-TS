import { StyleSheet } from "react-native";

import { COLORS } from "./colors";

export default StyleSheet.create({
  error: {
    color: "red",
  },
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
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.light,
    padding: 10,
    width: "100%",
    overflow: "hidden",
  },
});
