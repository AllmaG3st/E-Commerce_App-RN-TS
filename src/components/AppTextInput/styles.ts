import { StyleSheet } from "react-native";

import { COLORS } from "config/colors";

export default (error?: string, visible?: boolean) => {
  return StyleSheet.create({
    textInputContainer: {
      borderColor: error && visible ? COLORS.danger : "white",
      borderWidth: error && visible ? 2 : 0,
    },
    textInput: {
      width: "95%",
      marginLeft: 10,
      fontSize: 18,
      color: COLORS.dark,
    },
  });
};
