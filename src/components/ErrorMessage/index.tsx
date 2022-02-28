import { View, Text } from "react-native";
import React from "react";

import AppText from "components/AppText";
import globalStyles from "config/globalStyles";

type Props = {
  error?: string;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  if (!error) return null;

  return <AppText style={globalStyles.error}>{error}</AppText>;
};

export default ErrorMessage;
