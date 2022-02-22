import { View, SafeAreaView, ViewStyle } from "react-native";

import React, { ReactNode } from "react";

import styles from "./styles";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const Screen = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
