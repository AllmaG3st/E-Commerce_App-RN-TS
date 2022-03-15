import { FlatList, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AppActivityIndicator from "components/AppActivityIndicator";
import Card from "components/Card";
import Screen from "components/Screen";
import LoadingError from "./LoadingError";

import listingsApi from "api/listings";
import {
  FeedNavigationGenericProp,
  ListingResponse,
  useApiProps,
} from "types/data";
import { useApi } from "hooks/useApi";

import styles from "./styles";

type Item = {
  item: ListingResponse;
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
        thumbnailUrl={item.images[0].thumbnailUrl || ""}
      />
    );
  }, []);

  const keyExtractor = (listing: ListingResponse) => {
    return listing.id.toString();
  };

  return (
    <>
      <AppActivityIndicator visible={isLoading} />
      <Screen style={styles.screen}>
        {error && <LoadingError loadListings={loadListings} />}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listings}
          keyExtractor={keyExtractor}
          renderItem={renderListingItem}
        />
      </Screen>
    </>
  );
};

export default ListingsScreen;
