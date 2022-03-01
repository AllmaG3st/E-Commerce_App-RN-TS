import { View, Image, ImageSourcePropType } from "react-native";
import React, { memo } from "react";

import AppText from "../AppText";

import styles from "./styles";

type Props = {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
};

const Card: React.FC<Props> = ({ title = "", subTitle = "", image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

export default memo(Card);
