import { View, Text } from "react-native";
import React from "react";

import AppText from "components/AppText";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "config/colors";

import styles from "./styles";
import globalStyles from "config/globalStyles";

type Props = {
  placeHolder: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};

const AppPicker: React.FC<Props> = ({ iconName, placeHolder }) => {
  return (
    <View style={globalStyles.textInputContainer}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={COLORS.medium}
        />
      )}
      <AppText style={styles.text}>{placeHolder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={COLORS.medium}
      />
    </View>
  );
};

export default AppPicker;
