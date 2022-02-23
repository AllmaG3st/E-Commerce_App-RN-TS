import { StyleSheet } from "react-native";
import { COLORS } from "../../config/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: COLORS.medium,
    fontSize: 15,
  },
});
