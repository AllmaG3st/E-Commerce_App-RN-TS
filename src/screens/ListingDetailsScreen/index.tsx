import { View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRoute } from "@react-navigation/native";

import { FeedRouteGenericProp } from "types/data";

import AppText from "components/AppText";
import ListItem from "components/ListItem";

import styles from "./styles";

const ListingDetailScreen = () => {
  const { t } = useTranslation();

  const route = useRoute<FeedRouteGenericProp<"ListingDetails">>();

  const listing = route.params.item;

  return (
    <View>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
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
