import { View, TextInput, TextInputProps } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "config/colors";

import globalStyles from "config/globalStyles";
import styles from "./styles";

import { MaterialCommunityIconsType } from "types/data";

interface AppTextInput extends TextInputProps {
  error?: string;
  iconName?: MaterialCommunityIconsType;
  placeHolder?: string;
  props?: TextInputProps;
  visible?: boolean;
}

const AppTextInput: React.FC<AppTextInput> = ({
  error = "",
  placeHolder = "",
  iconName,
  visible = false,
  ...props
}) => {
  return (
    <View
      style={[
        globalStyles.textInputContainer,
        styles(error, visible).textInputContainer,
      ]}
    >
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={COLORS.medium}
        />
      )}
      <TextInput
        style={styles().textInput}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.medium}
        {...props}
      />
    </View>
  );
};

export default AppTextInput;
