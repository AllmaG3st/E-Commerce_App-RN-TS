import { View, ImageSourcePropType, Image } from "react-native";
import React, { memo } from "react";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "../AppText";
import AppTouchable from "../AppTouchable";

import styles from "./styles";

type Props = {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  //Change here
  onPress?: any;
  renderRightActions?: any;
};

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}: Props) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <AppTouchable onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </AppTouchable>
    </Swipeable>
  );
};

export default memo(ListItem);
