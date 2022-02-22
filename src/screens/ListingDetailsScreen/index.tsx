import { View, Text, Image } from "react-native";
import React from "react";

import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";

import styles from "./styles";

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
        <View style={styles.userContainer}>
          <ListItem
            title="Margot Robbie"
            subTitle="5 Listings"
            image={require("../../assets/margot.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;
