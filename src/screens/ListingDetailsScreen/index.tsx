import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import AppText from "../../components/AppText";

type Props = {};

const ListingDetailScreen = ({}: Props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/joystick.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
};

export default ListingDetailScreen;
