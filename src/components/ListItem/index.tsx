import { View, ImageSourcePropType, Image } from "react-native";
import React from "react";

import AppText from "../AppText";
import AppTouchable from "../AppTouchable";

import styles from "./styles";

type Props = {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
};

const ListItem = ({ title, subTitle, image }: Props) => {
  return (
    <AppTouchable onPress={() => console.log("hi")}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </AppTouchable>
  );
};

export default ListItem;
