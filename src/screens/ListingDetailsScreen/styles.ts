import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../config/colors";

import { percentage } from "../../utils/percentage";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  image: {
    width: "100%",
    height: percentage(height, 30),
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: COLORS.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
