import { FlatList } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { FeedNavigationGenericProp, Listing } from "types/data";

import Card from "components/Card";
import Screen from "components/Screen";

import styles from "./styles";

const listings: Listing[] = [
  {
    id: 1,
    title: "Joystick",
    price: 25,
    image: require("../../assets/joystick.jpg"),
  },
  {
    id: 2,
    title: "RTX 3090",
    price: 2999,
    image: require("../../assets/graphic-card.jpg"),
  },
  {
    id: 3,
    title: "Pool Cue Supernova-II",
    price: 99,
    image: require("../../assets/cue.jpg"),
  },
];

type Item = {
  item: Listing;
};

const ListingsScreen = () => {
  const { navigate } = useNavigation<FeedNavigationGenericProp<"Listings">>();

  // const handleNavigateToListingDetails = (item: Listing) => {
  //   console.log();
  //   navigate("ListingDetails", item);
  // };

  const renderListingItem = useCallback(({ item }: Item) => {
    return (
      <Card
        image={item.image}
        subTitle={`$ ${item.price}`}
        onPress={() => navigate("ListingDetails", { item })}
        title={item.title}
      />
    );
  }, []);

  const keyExtractor = (listing: Listing) => {
    return listing.id.toString();
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={keyExtractor}
        renderItem={renderListingItem}
      />
    </Screen>
  );
};

export default ListingsScreen;
