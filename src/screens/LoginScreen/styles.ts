import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {},
  logo: {
    width: width / 4,
    height: width / 4,
  },
});
