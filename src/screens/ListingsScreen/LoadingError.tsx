import { View } from "react-native";
import React from "react";

import AppText from "components/AppText";
import AppButton from "components/AppButton";

import styles from "./styles";

type Props = {
  loadListings: () => void;
};

const LoadingError: React.FC<Props> = ({ loadListings = () => {} }) => {
  return (
    <View style={styles.errorContainer}>
      <AppText>Could not load listings</AppText>
      <View style={styles.buttonContainer}>
        <AppButton title="Retry" onPress={loadListings} />
      </View>
    </View>
  );
};

export default LoadingError;
