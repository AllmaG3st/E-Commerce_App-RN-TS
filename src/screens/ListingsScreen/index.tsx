import { FlatList, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AppActivityIndicator from "components/AppActivityIndicator";
import Card from "components/Card";
import Screen from "components/Screen";
import LoadingError from "./LoadingError";

import listingsApi from "api/listings";
import { FeedNavigationGenericProp, Listing, useApiProps } from "types/data";
import { useApi } from "hooks/useApi";

import styles from "./styles";

type Item = {
  item: Listing;
};

const ListingsScreen = () => {
  const {
    data: listings,
    error,
    isLoading,
    request: loadListings,
  }: useApiProps = useApi(listingsApi.getListings);

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
