import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../config/colors";

import styles from "./styles";

type Props = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  size?: number;
  bgColor?: string;
  iconColor?: string;
};

const Icon: React.FC<Props> = ({
  name = "email",
  size = 40,
  bgColor = COLORS.black,
  iconColor = COLORS.white,
}) => {
  return (
    <View style={styles(size, bgColor).icon}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default Icon;
