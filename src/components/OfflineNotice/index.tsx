import { View } from "react-native";
import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "components/AppText";
import Screen from "components/Screen";

import styles from "./styles";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
};

export default OfflineNotice;
