import { View, Image } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

import AppText from "components/AppText";
import ListItem from "components/ListItem";

import styles from "./styles";

const ListingDetailScreen = () => {
  const { t } = useTranslation();

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
            subTitle={`5 ${t("Listings")}`}
            image={require("../../assets/margot.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;
