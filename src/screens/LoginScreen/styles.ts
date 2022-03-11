import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  errorMessage: {
    textAlign: "center",
    fontSize: 18,
  },
  logo: {
    alignSelf: "center",
    width: width / 4,
    height: width / 4,
    marginTop: 50,
    marginBottom: 20,
  },
});
