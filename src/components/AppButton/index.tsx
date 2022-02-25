import { View } from "react-native";
import React from "react";

import { COLORS } from "../../config/colors";

import AppTouchable from "../AppTouchable";
import AppText from "../AppText";

import styles from "./styles";

type Props = {
  onPress: () => void;
  title: string;
  bgColor?: string;
};

const AppButton: React.FC<Props> = ({ onPress = () => {}, title = '', bgColor = COLORS.primary }) => {
  return (
    <AppTouchable onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: bgColor }}>
        <AppText style={styles.buttonText}>{title}</AppText>
      </View>
    </AppTouchable>
  );
};

export default AppButton;
