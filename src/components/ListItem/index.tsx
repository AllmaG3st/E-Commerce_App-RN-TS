import { View, ImageSourcePropType, Image } from "react-native";
import React, { memo, ReactNode } from "react";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "../AppText";
import AppTouchable from "../AppTouchable";

import styles from "./styles";

type Props = {
  title: string;
  subTitle?: string;
  IconComponent?: ReactNode;
  iconSize?: number;
  image?: ImageSourcePropType;
  onPress?: () => void;
  renderRightActions?: any;
};

const ListItem: React.FC<Props> = ({
  title = "",
  subTitle,
  IconComponent,
  image,
  onPress = () => {},
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <AppTouchable onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </AppTouchable>
    </Swipeable>
  );
};

export default memo(ListItem);
