import { View } from "react-native";
import React from "react";

import Icon from "components/Icon";
import AppText from "components/AppText";

import { Category } from "types/data";

import styles from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {
  item: Category;
  onPress: () => {};
};

const CategoryPickerItem: React.FC<Props> = ({ item, onPress = () => {} }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon
          bgColor={item.backgroundColor}
          name={item.icon || "null"}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CategoryPickerItem;
