import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../config/colors";

import styles from "./styles";
import AppTouchable from "../AppTouchable";

type Props = {
  onPress: () => void;
};

const ListItemDeleteAction = ({ onPress }: Props) => {
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
