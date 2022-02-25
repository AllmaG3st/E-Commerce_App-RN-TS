import { View, Text } from "react-native";
import React from "react";

import AppTouchable from "components/AppTouchable";
import AppText from "components/AppText";

import styles from "./styles";

type Props = {
  label: string;
  onPress: () => void;
};

const PickerItem: React.FC<Props> = ({ label, onPress = () => {} }) => {
  return (
    <AppTouchable onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </AppTouchable>
  );
};

export default PickerItem;
