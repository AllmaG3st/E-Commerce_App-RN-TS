import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
