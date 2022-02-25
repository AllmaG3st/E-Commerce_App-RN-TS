import { View, SafeAreaView, ViewStyle } from "react-native";

import React, { ReactNode } from "react";

import styles from "./styles";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const Screen: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
