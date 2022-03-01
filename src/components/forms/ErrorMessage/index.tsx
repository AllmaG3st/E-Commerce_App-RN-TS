import { View } from "react-native";
import React from "react";

import AppText from "components/AppText";

import globalStyles from "config/globalStyles";

type Props = {
  error?: string;
  visible: undefined | boolean;
};

const ErrorMessage: React.FC<Props> = ({ error = "", visible = false }) => {
  if (!visible || !error) return null;
  return <AppText style={globalStyles.error}>{error}</AppText>;
};

export default ErrorMessage;
