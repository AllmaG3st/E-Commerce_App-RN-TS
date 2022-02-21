import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onPress: () => void;
};

const AppTouchable = ({ children, onPress, ...props }: Props) => {
  let Touchable: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <Touchable onPress={onPress} {...props}>
      {children}
    </Touchable>
  );
};

export default AppTouchable;
