import { View, Text } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AppText = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

export default AppText;
