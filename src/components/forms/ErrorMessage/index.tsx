import { TextStyle } from "react-native";
import React from "react";

import AppText from "components/AppText";

import globalStyles from "config/globalStyles";

type Props = {
  error?: string;
  visible: undefined | boolean;
  style?: TextStyle;
};

const ErrorMessage: React.FC<Props> = ({
  error = "",
  style,
  visible = false,
}) => {
  if (!visible || !error) return null;
  return <AppText style={{ ...globalStyles.error, ...style }}>{error}</AppText>;
};

export default ErrorMessage;
