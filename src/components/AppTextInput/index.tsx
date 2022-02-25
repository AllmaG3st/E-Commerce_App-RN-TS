import { View, TextInput, TextInputProps } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "config/colors";

import globalStyles from "config/globalStyles";
import styles from "./styles";

interface AppTextInput extends TextInputProps {
  placeHolder?: string;
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  props?: TextInputProps;
}

const AppTextInput: React.FC<AppTextInput> = ({
  placeHolder = "",
  iconName,
  props,
}) => {
  return (
    <View style={globalStyles.textInputContainer}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={COLORS.medium}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        {...props}
      />
    </View>
  );
};

export default AppTextInput;
