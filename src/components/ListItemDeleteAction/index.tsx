import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "config/colors";

import AppTouchable from "../AppTouchable";

import styles from "./styles";

type Props = {
  onPress: () => void;
};

const ListItemDeleteAction: React.FC<Props> = ({ onPress = () => {} }) => {
  return (
    <AppTouchable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          color={COLORS.white}
          size={35}
        />
      </View>
    </AppTouchable>
  );
};

export default ListItemDeleteAction;
