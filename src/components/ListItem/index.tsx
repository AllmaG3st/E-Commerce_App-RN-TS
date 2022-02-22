import { View, Text, ImageSourcePropType, Image } from "react-native";
import React from "react";

import styles from "./styles";
import AppText from "../AppText";

type Props = {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
};

const ListItem = ({ title, subTitle, image }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;
