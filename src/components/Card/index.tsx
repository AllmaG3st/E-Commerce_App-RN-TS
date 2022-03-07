import {
  View,
  Image,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from "react-native";
import React, { memo } from "react";

import AppText from "../AppText";

import styles from "./styles";

type Props = {
  title: string;
  subTitle: string;
  imageUrl: string;
  onPress?: (item: any) => void;
};

const Card: React.FC<Props> = ({
  title = "",
  subTitle = "",
  imageUrl,
  onPress = () => {},
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
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
