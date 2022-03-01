import { Text, TextProps, TextStyle } from "react-native";
import React, { ReactNode } from "react";

import globalStyles from "config/globalStyles";

interface Props extends TextProps {
  children: ReactNode;
  style?: TextStyle;
  props?: TextProps;
}

const AppText: React.FC<Props> = ({ children, style, ...props }) => {
  return (
    <Text style={[globalStyles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
