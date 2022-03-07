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

type Item = {
  item: Listing;
};

const ListingsScreen = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { navigate } = useNavigation<FeedNavigationGenericProp<"Listings">>();

  const loadListings = useCallback(async () => {
    setIsLoading(true);
    const { ok, data }: any = await listingsApi.getListings();
    setIsLoading(false);

    if (!ok) return setError(true);

    setError(false);
    setListings(data);
  }, []);

  useEffect(() => {
    loadListings();
  }, [loadListings]);

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
