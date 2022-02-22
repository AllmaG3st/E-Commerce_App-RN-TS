import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../config/colors";

export default StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "open-sans-bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
