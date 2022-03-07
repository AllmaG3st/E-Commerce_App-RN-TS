import { FlatList, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AppText from "components/AppText";
import Card from "components/Card";
import Screen from "components/Screen";

import listingsApi from "api/listings";
import { FeedNavigationGenericProp, Listing } from "types/data";

import styles from "./styles";
import AppButton from "components/AppButton";
import LoadingError from "./LoadingError";
import AppActivityIndicator from "components/AppActivityIndicator";
import { useLoadListings } from "hooks/useLoadListings";

type Item = {
  item: Listing;
};

const ListingsScreen = () => {
  const [listings, error, isLoading, loadListings]: any = useLoadListings();

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
      {error && <LoadingError loadListings={loadListings} />}
      <AppActivityIndicator visible={isLoading} />
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
