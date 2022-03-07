import { FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import listingsApi from "api/listings";
import { FeedNavigationGenericProp, Listing } from "types/data";

import Card from "components/Card";
import Screen from "components/Screen";

import styles from "./styles";

type Item = {
  item: Listing;
};

const ListingsScreen = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const loadListings = async () => {
      const response: any = await listingsApi.getListings();
      setListings(response.data);
    };
    loadListings();
  }, []);

  const { navigate } = useNavigation<FeedNavigationGenericProp<"Listings">>();

  const renderListingItem = useCallback(({ item }: Item) => {
    return (
      <Card
        imageUrl={item.images[0].url}
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
