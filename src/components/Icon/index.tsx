import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../config/colors";

type Props = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  size?: number;
  bgColor?: string;
  iconColor?: string;
};

const Icon = ({
  name = "email",
  size = 40,
  bgColor = COLORS.black,
  iconColor = COLORS.white,
}: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default Icon;
