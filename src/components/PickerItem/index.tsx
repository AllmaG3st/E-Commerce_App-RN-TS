import React from "react";

import AppTouchable from "components/AppTouchable";
import AppText from "components/AppText";

import styles from "./styles";
import { Category } from "types/data";

type Props = {
  item: Category;
  onPress: () => void;
};

const PickerItem: React.FC<Props> = ({ item, onPress = () => {} }) => {
  return (
    <AppTouchable onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </AppTouchable>
  );
};

export default PickerItem;
