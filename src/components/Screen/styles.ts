import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
