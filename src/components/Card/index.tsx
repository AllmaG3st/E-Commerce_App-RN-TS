import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";

import AppText from "../AppText";

import styles from "./styles";

type Props = {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
};

const Card = ({ title, subTitle, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;
