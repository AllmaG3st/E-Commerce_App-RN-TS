import { Text, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import globalStyles from "../../config/globalStyles";

type Props = {
  children: ReactNode;
  style?: TextStyle;
};

const AppText = ({ children, style }: Props) => {
  return <Text style={[globalStyles.text, style]}>{children}</Text>;
};

export default AppText;
