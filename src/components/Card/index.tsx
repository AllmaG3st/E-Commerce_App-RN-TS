import { View, TouchableWithoutFeedback } from "react-native";
import React, { memo } from "react";
import { Image } from "react-native-expo-image-cache";

import AppText from "../AppText";

import styles from "./styles";

type Props = {
  title: string;
  subTitle: string;
  imageUrl: string;
  onPress?: (item: any) => void;
  thumbnailUrl: string;
};

const Card: React.FC<Props> = ({
  title = "",
  subTitle = "",
  imageUrl,
  onPress = () => {},
  thumbnailUrl = "",
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(Card);
