import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../../config/colors";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: COLORS.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: height / 4,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: COLORS.secondary,
    fontWeight: "bold",
  },
});
